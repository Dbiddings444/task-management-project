<template>
  <div id="app">
    <router-view /> <!-- Where the current route's component renders -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Optional basic styling */
nav {
  background: #42b983;
  padding: 10px;
  display: flex;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
