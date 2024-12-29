<template>
<div class="container">
<div class="column"><TaskCard/></div>
<div class="column"><TaskCard/></div>
<div class="column"><TaskCard/></div>
<div class="column"><TaskCard/></div>
<div class="column"><TaskCard/></div>
</div>
</template>
<script>
import TaskCard from '@/components/TaskCard.vue';

export default {
    name: "projectBoardCard",
    methods:{},
    components:{
        TaskCard
    }
}
</script>
<style scoped>
.container{
    display: flex;
}
.column{
    display: contents;
}
</style>