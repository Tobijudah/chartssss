import type { Artist, Track } from './musixmatch';

export type FetchChartResponse = {
  body: {
    message: {
      header: { status_code: number; execute_time: number };
      body: { track_list: { track: Track }[] } | { artist_list: { artist: Artist }[] };
    };
  };
};
