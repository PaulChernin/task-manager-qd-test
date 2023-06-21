<template>
    <div>
        <h1>Задачи</h1>
        <form>
            <input
                v-model="newTaskText"
                type="text"
                placeholder="Новая задача"
            >
            <button
                type="submit"
                @click="addTask"
                :disabled="!newTaskText"
            >
                Добавить
            </button>
        </form>
        <ul>
            <li
                v-for="task in tasks"
                :key="task.id"
            >
                <input
                    v-model="task.text"
                    @update:modelValue="changeTask(task)"
                    type="text"
                    :style="{textDecoration: task.completed ? 'line-through' : 'none'}"
                >
                <input
                    v-model="task.completed"
                    type="checkbox"
                >
                <button @click="removeTask(task)">Удалить</button>
            </li>
        </ul>
        <div v-if="!tasks.length">
            Нет ни одной задачи
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addTask() {
            this.$store.commit('createTask', {
                text: this.newTaskText,
                completed: false
            })

            this.newTaskText = ''
        },
        changeTask(task) {
            this.$store.commit('changeTask', task)
        },
        removeTask(task) {
            this.$store.commit('removeTask', task)
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks
        }
    },
    data() {
        return {
            newTaskText: ''
        }   
    }
}
</script>

<style>

</style>
