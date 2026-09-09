<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <div class="center-page">
    <h1>KEVIN</h1>
    <button class="kevbutton" @click="router.push('/')">Back</button>
  </div>
</template>

<style scoped>
.center-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>