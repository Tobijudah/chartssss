import type { Artist, Track } from './musixmatch';

export type Chart = 'tracks' | 'artists';

export type FormState = {
  chart: Chart;
  country: string;
  number: null | number;
};

export type StoreState = FormState;

export type Store = {
  state: StoreState;
  tracks: { track: Track }[];
  artists: { artist: Artist }[];
  setState: (newState: StoreState) => void;
  setTracks: (newTracks: { track: Track }[]) => void;
  setArtists: (newArtists: { artist: Artist }[]) => void;
};
