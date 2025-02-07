<template>
<div class="container">
<div class="column">

</div>
<div class="column">
    <TaskCard 
    v-for="task in toDoTasks"
    :key="task._id"
    :summary="task.summary"
    :reporter="task.reporter"
    :assignee="task.assignee"
     />
</div>
<div class="column">
    
</div>
<div class="column">
    
</div>
</div>
</template>
<script setup>
import TaskCard from '@/components/TaskCard.vue';
import { ref, onMounted } from 'vue';
const fetchTasks = async () => {
    const toDoTasks = ref([]);
    const inProgressTasks = ref([]);
    const completedTasks = ref([]);
   
    try {
      const response = await fetch("http://localhost:3000/api/auth/tasks");
      const tasks = await response.json(); //This is where the error is occuring
      toDoTasks.value = tasks.filter(task => task.status === 'To Do');
      inProgressTasks.value = tasks.filter(task => task.status === 'In Progress');
      completedTasks.value = tasks.filter(task => task.status === 'Completed');

    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
    console.log('to-do task: ',toDoTasks )
  };
  
  onMounted(() => fetchTasks());
</script>
<style scoped>
.container{
    display: flex;
}
.column{
    display: contents;
}
</style>