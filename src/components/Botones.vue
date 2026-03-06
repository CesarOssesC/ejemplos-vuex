<template>
    <h3>Mensaje: {{ store.state.saludo }}</h3>

    <button @click="sumar">Incrementar Contador inmediato</button>
    <button @click="restar">Decrementar Contador</button>
    <button @click="sumarAsync">Incrementar contador despues de 3 segundos</button>
</template>

<script setup>
    import { useStore } from 'vuex'

    const store = useStore()

    const sumar = () => {
        store.commit('incrementar')
    }

    const restar = () => {
        store.commit('decrementar')
    }

    const sumarAsync = () => {
        store.dispatch('incrementarAsync')
    }
</script>

<style scoped>
</style>