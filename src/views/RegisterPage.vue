<template>
     <h1>Create an account</h1>   
<form @submit.prevent="loginFunction">
    <label for="userName">Username</label><br>
    <input type="text" id="userName" name="userName"><br><br>
    <label for="password" id="password" name="password">Password</label><br>
    <input type="password" id="password" name="password"><br><br>
    <!-- replace with a button that submits form info and redirects the user  -->
    <button type="submit">Register</button><br><br>
    <a href="/">Already have an account, click here</a>
</form>
</template>

<script>
export default{
    methods:{
 loginFunction() {
    this.$router.push("/");
}}
}
</script>