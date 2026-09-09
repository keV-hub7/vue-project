<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <button class="kevbutton" @click="router.push('/about')">KEVIN</button>
</template>