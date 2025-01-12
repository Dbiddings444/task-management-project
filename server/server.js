const dotenv = require('dotenv'); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const bodyParser = require('body-parser'); // Use require for body-parser

dotenv.config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use('/uploads', express.static('uploads')); 
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../public', 'index.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Connected to Database'))
  .catch((error) => console.error('Failed to connect to Database:', error));

// Define a simple route
app.get('/', (req, res) => {
  res.send('The Server is up and running!!!');
});

// Use the authentication routes
app.use('/', userRoutes);

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
