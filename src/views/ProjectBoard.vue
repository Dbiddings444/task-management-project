<template>
<header>
<h1>Project Name</h1>
<Button 
class="create_button" 
variant="secondary" 
size="sm"
@click="redirectFunction"
>Create Story</Button>
</header>
<ProjectBoardCard/>
</template>
<script>
// import TaskCard from '@/components/TaskCard.vue';
import ProjectBoardCard from '@/components/ProjectBoardCard.vue';
import Button from '@/components/Button.vue';

export default {
    name: "ProjectBoard",
    methods:{
        redirectFunction() {
    this.$router.push("/CreateTask");
}
    },
    components:{
        ProjectBoardCard,
        Button
    }
}
</script>
<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.create_button{
    height: 40px;
}
</style>