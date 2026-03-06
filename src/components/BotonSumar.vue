<template>
    <button @click="sumar">Incrementar Contador</button>
    <button @click="restar">Decrementar Contador</button>
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
</script>

<style scoped>
</style>