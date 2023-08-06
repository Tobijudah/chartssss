<script setup lang="ts">
import { store } from '@/store';
import Track from './Track.vue';
import Artist from './Artist.vue';
</script>

<template>
  <div class="container">
    <h3 class="title purple">
      <template v-if="store.state.country">
        Top {{ store.state.chart }} ({{ store.state.country.toUpperCase() }})
        <template v-if="store.state.loading">— loading...</template>
      </template>
      <template v-else>Awaiting Search...</template>
    </h3>
    <div class="grid">
      <template v-if="store.state.chart === 'tracks'">
        <Track
          v-for="({ track }, index) of store.tracks"
          :key="track.track_id"
          :number="index + 1"
          :track="track"
        />
      </template>
      <template v-else>
        <Artist
          v-for="({ artist }, index) of store.artists"
          :key="artist.artist_id"
          :number="index + 1"
          :artist="artist"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: max(78%, calc(100% - 300px));
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
}

.title {
  font-size: 24px;
  text-transform: capitalize;
  padding-bottom: 16px;
  border-bottom: 1px solid #341539a0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 32px;
}
</style>
