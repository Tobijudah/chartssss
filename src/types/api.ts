import type { Artist, Track } from './musixmatch';
import type { QueryKey } from '@tanstack/vue-query';

export type FetchChartRequest = {
  queryKey: QueryKey;
};

export type FetchChartResponse = null | {
  body: {
    message: {
      header: { status_code: number; execute_time: number };
      body: { track_list: { track: Track }[] } | { artist_list: { artist: Artist }[] };
    };
  };
};
