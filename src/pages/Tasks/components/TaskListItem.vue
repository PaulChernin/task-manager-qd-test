<template>
    <li>
        <input
            v-model="task.text"
            @input="changeTask(task)"
            type="text"
            :style="{textDecoration: task.completed ? 'line-through' : 'none'}"
            :class="{error: !isValid}"
        >
        <input
            v-model="task.completed"
            type="checkbox"
            @change="changeTask(task)"
        >
        <button @click="removeTask(task)">Удалить</button>
    </li>
</template>

<script>
export default {
    props: {
        task: Object
    },
    methods: {
        changeTask(task) {
            this.$store.commit("changeTask", task)
        },
        removeTask(task) {
            this.$store.commit("removeTask", task)
        }
    },
    computed: {
        isValid() {
            return !!this.task.text.trim()
        }
    }
}
</script>

<style lang="sass">

</style>
