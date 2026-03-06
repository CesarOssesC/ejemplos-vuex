import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            contador: 1,
            saludo: "Hola desde vuex"
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
    },
    actions: {
        incrementarAsync({ commit }) {
            setTimeout(() => {
                commit('incrementar')
            }, 3000)
        }
    }
})