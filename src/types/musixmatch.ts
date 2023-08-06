type ArtistAlias = {
  artist_alias: string;
};

export type Artist = {
  artist_alias_list: ArtistAlias[];
  artist_comment: string;
  artist_country: string;
  artist_credits: { artist_list: [] };
  artist_id: number;
  artist_name: string;
  artist_name_translation_list: [];
  artist_rating: number;
  artist_twitter_url: string;
  begin_date: string;
  begin_date_year: string;
  end_date: string;
  end_date_year: string;
  restricted: number;
  updated_time: string;
};

type MusicGenre = {
  music_genre_id: number;
  music_genre_name: string;
  music_genre_name_extended: string;
  music_genre_parent_id: number;
  music_genre_vanity: string;
};

export type Track = {
  album_id: number;
  album_name: string;
  artist_id: number;
  artist_name: string;
  commontrack_id: number;
  explicit: number;
  has_lyrics: number;
  has_richsync: number;
  has_subtitles: number;
  instrumental: number;
  num_favourite: number;
  primary_genres: { music_genre_list: { music_genre: MusicGenre }[] };
  restricted: number;
  track_edit_url: string;
  track_id: number;
  track_name: string;
  track_name_translation_list: [];
  track_rating: number;
  track_share_url: string;
  updated_time: string;
};