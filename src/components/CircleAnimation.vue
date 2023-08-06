<script setup lang="ts"></script>

<template>
  <div id="circles">
    <div v-for="n in 3" :key="n" :id="`circle${n}`" class="circle" />
  </div>
</template>

<style scoped>
#circles {
  width: 100%;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.circle {
  background-color: rgb(255, 255, 255);
  width: 8px;
  height: 8px;
  animation-name: circle_animation;
  animation-duration: 1.7575s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  border-radius: 30px;
}

#circle1 {
  animation-delay: 0.3s;
}

#circle2 {
  animation-delay: 0.6s;
}

#circle3 {
  animation-delay: 0.9s;
}

@keyframes circle_animation {
  50% {
    background-color: transparent;
  }
}
</style>
