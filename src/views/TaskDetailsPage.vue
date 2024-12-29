<template>
<h1>Task Details Name</h1>
<div class="CtaButtons">
<Button 
variant="primary"
size="sm"
>
Edit
</Button>
<Button 
variant="primary"
size="sm"
>
Add Comment
</Button>
<Button 
variant="primary"
size="sm"
>
Assign
</Button>

</div>
<div class="details">
   <h3>Details</h3>
   <p>Reporter: </p>
   <p>Assignee: </p>
   <p>Priority: </p>
   <h3>Dates</h3>
   <p>Created: </p>
   <p>Updated: </p>
   <p></p>
</div>
<div class="description">
    <h3>Description</h3>
    <p>This is somewhere where the details would end up, you know what I'm saying???</p>
    </div>
<div class="attachments">
    <h3>Attachments</h3>
</div>
<div class="comments">
    <h3>Comments</h3>
</div>
</template>
<script>
import Button from '@/components/Button.vue';

export default {
    name: "TaskDetailsPage",
    methods:{},
    components:{
        Button
    }
}
</script>
<style>
</style>