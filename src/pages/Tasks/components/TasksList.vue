<template>
    <div>
        <ul>
            <TaskListItem
                v-for="task in tasks"
                :key="task.id"
                :task="task"
            />
        </ul>
        <div v-if="!tasks.length">
            Нет ни одной задачи
        </div>
    </div>
</template>

<script>
import TaskListItem from './TaskListItem.vue'

export default {
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    },
    data() {
        return {}
    },
    components: { TaskListItem }
}
</script>

<style lang="sass">

</style>
