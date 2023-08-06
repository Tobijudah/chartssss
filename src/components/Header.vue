<script setup lang="ts"></script>

<template>
  <header class="header">
    <h1 class="title">Chartssss<span class="purple">.</span></h1>
    <h2 class="subTitle purple">Discover music charts from all over the world</h2>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
  text-align: left;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.title {
  font-size: 48px;
  letter-spacing: 0;

  @media (max-width: 1023px) {
    font-size: 32px;
  }
}

.subTitle {
  font-size: 16px;

  @media (max-width: 1023px) {
    font-size: 14px;
  }
}
</style>
