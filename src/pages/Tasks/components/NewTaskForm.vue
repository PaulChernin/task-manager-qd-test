<template>
    <div>
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
    },
    data() {
        return {
            newTaskText: ''
        }
    }
}
</script>

<style lang="sass">

</style>
