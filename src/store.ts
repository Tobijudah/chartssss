import { reactive } from 'vue';
import type { Store } from '@/types/app';

export const store = reactive<Store>({
  tracks: [],
  artists: [],
  state: {
    country: '',
    number: null,
    chart: 'tracks',
  },
  setState(newState) {
    this.state = newState;
  },
  setTracks(newTracks) {
    this.tracks = newTracks;
  },
  setArtists(newArtists) {
    this.artists = newArtists;
  },
});
