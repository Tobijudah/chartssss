<script setup lang="ts">
import Header from '@/components/Header.vue';
import Controls from '@/components/Controls.vue';
</script>

<template>
  <main class="main">
    <Header />
    <Controls />
  </main>
</template>

<style scoped>
.main {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}
</style>
