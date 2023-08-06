<script setup lang="ts">
import Chart from './components/Chart.vue';
import Header from '@/components/Header.vue';
import Controls from '@/components/Controls.vue';
</script>

<template>
  <main class="main">
    <Header />
    <div class="content">
      <Controls />
      <Chart />
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

.content {
  display: flex;
  gap: 32px;
}
</style>
