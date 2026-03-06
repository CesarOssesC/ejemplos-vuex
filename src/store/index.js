import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            contador: 1
        }
    },
    mutations : {
        incrementar(state) {
            state.contador++
        },
        decrementar(state) {
            state.contador--
        }
    },
    getters: {
        dobleContador(state) {
            return state.contador * 2
        }
    }
})