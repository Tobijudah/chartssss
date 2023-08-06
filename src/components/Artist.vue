<script setup lang="ts">
import type { Artist } from '@/types/musixmatch';
import Microphone from '@/components/icons/Microphone.vue';

defineProps<{ artist: Artist; number: number }>();
</script>

<template>
  <div class="artist">
    <Microphone class="icon" />
    <div class="text">
      <a class="clamp">{{ number }}. {{ artist.artist_name }}</a>
      <p class="sub clamp">Rating: {{ artist.artist_rating }}</p>
    </div>
  </div>
</template>

<style scoped>
.artist {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #ffeaef;
}

.icon {
  width: 32px;
  height: 32px;
  min-width: 32px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.sub {
  color: #341539a0;
}
</style>
