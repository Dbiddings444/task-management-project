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
  { path: '/Register', component: Register },  
  { path: '/Dashboard', component: Dashboard },  
  { path: '/ProjectBoard', component: ProjectBoard },  
  { path: '/TaskDetails', component: TaskDetailsPage },  
  { path: '/CreateTask', component: CreateTaskPage },  
  { path: '/Login', component: Login },  
];

// Create the router
const router = createRouter({
  history: createWebHistory(), // Use browser history mode
  routes,                      // Register routes
});

export default router;
