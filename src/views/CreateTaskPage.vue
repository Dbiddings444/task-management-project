<template>
    <form @submit.prevent="createTask">
        <h1>Create Task</h1>
        <label>Summary</label>
        <input type="text" v-model="summary">
        <label>Attachment</label>
        <input type="file" v-on="attachment">
        <label>Description</label>
        <input type="text" v-model="description">
        <label>Reporter</label>
        <!--Change reporter field to a drop down that goes through a list of users of application-->
        <input type="text" v-model="reporter">
        <label>Assignee</label>
        <!--Change assignee field to a drop down that goes through a list of users of application-->
        <input type="text" v-model="assignee">
        <button type="submit">Create Task</button>
    </form>
</template>
<script>
import { apiRequest } from '@/utils/apiHelpers';

export default {
    methods: {
        createTask() {
            let obj = {
                summary: this.summary,
                imageUrl: this.attachment,
                description: this.description,
                reporter: this.reporter,
                assignee: this.assignee
            }
            const token = localStorage.getItem('token');
            apiRequest('http://localhost:3000/api/auth/createTask', 'POST', obj, token)
                .then((data) => {
                    alert(data.message);
                    this.$router.push("/ProjectBoard");
                })
                .catch(error => {
                    alert(error.message);
                    console.error('Error occurred:', error.message);
                });

        }
    }
}
</script>
<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;

}
</style>