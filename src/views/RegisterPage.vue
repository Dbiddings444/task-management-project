<template>
    <h1>Create an account</h1>
    <form @submit.prevent="createUser">
        <label for="userName">Username</label><br>
        <input type="text" id="userName" name="userName" v-model="userName"><br><br>
        <label for="password" id="password" name="password">Password</label><br>
        <input type="password" id="password" name="password" v-model="password"><br><br>
        <!-- replace with a button that submits form info and redirects the user  -->
        <button type="submit">Register</button><br><br>
        <a href="/Login">Already have an account, click here</a>
    </form>
</template>

<script>
// import { response } from 'express';
const baseUrl = `${window.location.origin}`;
export default {
    methods: {
        createUser() {
            console.log('Page Url: ', baseUrl);
            console.log('Username: ', this.userName);
            console.log('Password: ', this.password);
            if (!this.userName || !this.password) {
                alert("All fields are required")
                return;
            }
            let obj = { username: this.userName, password: this.password }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            };
            fetch('http://localhost:3000/api/auth/signup', options)
                .then(async response => {
                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message);
                    }
                    return response.json()
                })
                .then((data) => {
                    alert(data.message);
                    // alert("Registration successful!")
                    this.$router.push("/Login");
                })
                .catch(error => {
                    alert(error.message);
                    console.error('Error occurred:', error.message);
                });

        }
    }
}
</script>