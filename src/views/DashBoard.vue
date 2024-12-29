<template>
<h1>Dashboard</h1>
<h3>Project Overview</h3>
<div class="row">
    <StatusCard title="[number]On Hold"/>
    <StatusCard title="[number]In Progress"/>
    <StatusCard title="[number]In Review"/>
    <StatusCard title="[number]Completed"/>
</div>
<h3>Similar Projects</h3>
</template>
<script>
import StatusCard from '@/components/StatusCard.vue';

export default {
  name: "DashBoard", // Add component name for debugging clarity
  components: {
    StatusCard, // Register the imported component
  },
};
</script>
<style>
.row{
    display: flex;
}
</style>