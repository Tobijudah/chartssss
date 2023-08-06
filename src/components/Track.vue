<script setup lang="ts">
import type { Track } from '@/types/musixmatch';
import Disc from '@/components/icons/Disc.vue';
import Link from '@/components/icons/Link.vue';

defineProps<{ track: Track; number: number }>();
</script>

<template>
  <div class="track">
    <Disc class="icon" />
    <div class="text">
      <a class="link" title="View on Musixmatch" target="_blank" :href="track.track_share_url">
        <span class="clamp">#{{ number }}. {{ track.track_name }}</span>
        <Link class="smallIcon" />
      </a>
      <p class="sub clamp">{{ track.artist_name }} · {{ track.album_name }}</p>
    </div>
  </div>
</template>

<style scoped>
.track {
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

.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  color: inherit;
  text-decoration: none;
}

.clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.smallIcon {
  width: 16px;
  height: 16px;
  min-width: 16px;
}

.sub {
  color: #341539a0;
}
</style>
