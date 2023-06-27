<template>
    <div>
        <h1>Задачи</h1>
        <NewTaskForm/>
        <TasksList/>
    </div>
</template>

<script>
import NewTaskForm from './components/NewTaskForm.vue'
import TasksList from './components/TasksList.vue'

export default {
    components: { NewTaskForm, TasksList }
}
</script>

<style>

</style>
