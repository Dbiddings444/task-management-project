import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Login from '../views/LoginPage.vue';
import Register from '../views/RegisterPage.vue';
import Dashboard from '../views/DashBoard.vue';
import ProjectBoard from '../views/ProjectBoard.vue';
import TaskDetailsPage from '../views/TaskDetailsPage.vue';
import CreateTaskPage from '../views/CreateTaskPage.vue';
// Define routes
const routes = [
  { path: '/register', component: Register },  // About route
  { path: '/Dashboard', component: Dashboard },  // About route
  { path: '/ProjectBoard', component: ProjectBoard },  // About route
  { path: '/TaskDetails', component: TaskDetailsPage },  // About route
  { path: '/CreateTask', component: CreateTaskPage },  // About route
  { path: '/', component: Login },  // Login route
];

// Create the router
const router = createRouter({
  history: createWebHistory(), // Use browser history mode
  routes,                      // Register routes
});

export default router;
