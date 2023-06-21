import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = createStore({
    state () {
        return {
            tasks: [
                { id: 2, text: 'Выпить кофе', completed: false },
                { id: 1, text: 'Придумать забавную задачу', completed: false }
            ]
        }
    },
    mutations: {
        createTask(state, newTask) {
            newTask.id = state.tasks.length ? (state.tasks[0].id + 1) : 1
            state.tasks = [newTask, ...state.tasks]
        },
        changeTask(state, newTask) {
            const task = state.tasks.find(t => t.id === task.id)
            task.text = newTask.text
            task.completed = newTask.completed
        },
        removeTask(state, task) {
            state.tasks = state.tasks.filter(t => t.id !== task.id)
        }
    },
    plugins: [vuexLocal.plugin]
})

export default store