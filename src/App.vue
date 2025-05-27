<script setup>

import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent @click-cart="showCart = !showCart" />
  <main>
    <RouterView/>
  </main>
  <footer-component />
</template>

<style scoped>

</style>