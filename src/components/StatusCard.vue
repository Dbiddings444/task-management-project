<template>
    <div class="card" @click="redirect">
      <div class="card-header">
        <slot name="header">{{title}}</slot>
      </div>
      <div class="card-body">
        <slot>Default Card Content</slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatusCard",
    props:{
        title: String, // Prop title accepts a string
    },
methods:{
   redirect() {
    this.$router.push("/ProjectBoard");
  }
}

  };


  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    margin: 16px;
  }
  
  .card-header {
    background-color: #f5f5f5;
    padding: 12px;
    font-weight: bold;
    font-size: 16px;
  }
  
  .card-body {
    padding: 16px;
    font-size: 14px;
    color: #333;
  }
  
  .card-footer {
    background-color: #f5f5f5;
    padding: 12px;
    text-align: right;
  }
  </style>
  