<template>
    <div class="card" @click="redirect">
      <div class="card-header">
        <slot name="header">{{title}}</slot>
      </div>
      <div class="card-body">
        <slot>{{ summary }}</slot>
      </div>
      <div class="card-footer">
        <slot>{{ assignee }}</slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskCard",
    props:{
      summary: {
      type: String, // The expected type of the prop
      required: true, // This prop must be provided
    },
    reporter: {
      type: String,
      default: "Unknown Reporter", // Default value if the prop is not provided
    },
    assignee: {
      type: String,
      default: "Unassigned",
    },
  },
methods:{
   redirect() {
    this.$router.push("/TaskDetails");
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
    width: 100%;
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
  