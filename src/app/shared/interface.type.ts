export interface TopArtistRequestInterface {
  country: string;
}

export interface Countries {
  code: string;
  name: string;
}

export interface ArtistDetail {
  name: string;
  image: any[];
  stats: ArtistStarts;
}

interface ArtistStarts {
  listeners: string;
  playcount: string;
}

export interface TopTracks {
  name: string;
  playcount: string;
  image: any[];
}

export interface TopAlbums {
  name: string;
  playcount: string;
  image: any[];
}
