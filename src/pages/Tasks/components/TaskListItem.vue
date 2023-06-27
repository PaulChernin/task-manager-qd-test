<template>
    <li>
        <MyInput
            v-model="task.text"
            :isValid="isValid"
            @input="changeTask(task)"
            :inputStyle="task.completed ? 'text-decoration: line-through;' : ''"
        />
        <input
            v-model="task.completed"
            type="checkbox"
            @change="changeTask(task)"
        >
        <button @click="removeTask(task)">Удалить</button>
    </li>
</template>

<script>
import MyInput from '../../../components/MyInput.vue'

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
    },
    components: { MyInput }
}
</script>

<style scoped>

</style>
