const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const jwtSecret = process.env.JWT_SECRET_KEY;

async function encryptPassword(response, user) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(user.password, salt);
		user.password = hash;
		await user.save();
		response.send({ message: 'Registration successful!' });
	} catch (err) {
		console.error(err);
		response.status(500).send({ message: 'Error during registration' });
	}
}

exports.signup = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: 'Username and password are required' });
		}
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ message: 'Username already exists' });
		}

		const newUser = new User({ username, password });
		await encryptPassword(res, newUser);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error during signup' });
	}
}

exports.login = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: 'username and password are required' });
		}

		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: 'username not found' });
		}

		const matches = await bcrypt.compare(password, user.password);
		if (matches) {
			const signedToken = jwt.sign({ username, userId: user._id.toString() }, jwtSecret, { expiresIn: '1h' });
			res.send({ token: signedToken, userId: user._id.toString()});
			console.log('userId',user._id.toString());
		} else {
			res.status(401).json({ message: 'Incorrect password' });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error during login' });
	}
}