<template>
  <h1>{{ store.state.saludo }}</h1>

  <MostrarContador />
  <Botones />
</template>

<script setup>
import Botones from './components/Botones.vue';
import MostrarContador from './components/MostrarContador.vue';
import { useStore } from 'vuex';

    const store = useStore()

</script>

<style scoped></style>
