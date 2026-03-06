<!-- Forma sin VUEX -->
<!-- <template>
    <h2>Contador global: {{ contador }}</h2>
</template>

<script setup>
    import { ref } from 'vue'
    const contador = ref(0)
</script>

<style scoped>
</style> -->

<!-- Forma con VUEX -->
<template>
    <h2>Contador global: {{ store.state.contador }}</h2>
    <h3>Doble del contador: {{ store.getters.dobleContador }}</h3>
    <h3>Mensaje: {{ store.state.saludo }}</h3>
</template>

<script setup>
    import { useStore } from 'vuex';

    const store = useStore()
</script>

<style scoped>
</style>