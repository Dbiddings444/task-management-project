<template>
    <header>
        <h1>Project Name</h1>
        <Button class="create_button" variant="secondary" size="sm" @click="redirectFunction">Create Story</Button>
    </header>
    <div class="column-container">
        <div class="column">
            <h3>To Do</h3>

        </div>
        <div class="column">
            <h3>In Progress</h3>
        </div>
        <div class="column">
            <h3>Completed</h3>
        </div>
    </div>
    <ProjectBoardCard />
</template>
<script>
// import TaskCard from '@/components/TaskCard.vue';
import ProjectBoardCard from '@/components/ProjectBoardCard.vue';
import Button from '@/components/Button.vue';

export default {
    name: "ProjectBoard",
    methods: {
        redirectFunction() {
            this.$router.push("/CreateTask");
        }
    },
    components: {
        ProjectBoardCard,
        Button
    }
}
</script>
<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.create_button {
    height: 40px;
}
.column-container {
display: flex;
flex-direction: row;
justify-content: space-evenly;
}
.column {
    margin-right: 20px; 
    display: flex;
    flex-direction: column; 
}
</style>