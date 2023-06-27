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
                :disabled="!newTaskText.trim()"
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
                    @input="changeTask(task)"
                    type="text"
                    :style="{textDecoration: task.completed ? 'line-through' : 'none'}"
                    :class="{error: !task.text.trim()}"
                >
                <input
                    v-model="task.completed"
                    type="checkbox"
                    @change="changeTask(task)"
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
                text: this.newTaskText.trim(),
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
