<template>
    <button
      :class="['base-button', variant, size]"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "BaseButton",
    props: {
      variant: {
        type: String,
        default: "primary", // e.g., "primary", "secondary", "danger"
      },
      size: {
        type: String,
        default: "md", // e.g., "sm", "md", "lg"
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
  .base-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  .base-button.primary {
    background-color: #007bff;
    color: white;
  }
  .base-button.primary:hover {
    background-color: #0056b3;
  }
  
  .base-button.secondary {
    background-color: #6c757d;
    color: white;
  }
  .base-button.secondary:hover {
    background-color: #5a6268;
  }
  
  .base-button.danger {
    background-color: #dc3545;
    color: white;
  }
  .base-button.danger:hover {
    background-color: #c82333;
  }
  
  .base-button.sm {
    font-size: 0.875rem;
    padding: 0.25rem 0.5rem;
  }
  .base-button.md {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
  .base-button.lg {
    font-size: 1.25rem;
    padding: 0.75rem 1.5rem;
  }
  
  .base-button:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
  </style>
  