export type Movie = {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  genre: string;
  duration: number;
  director: string;
  cast: string[];
};

export type MovieCategory = {
  name: string;
  movieIds: number[];
  title: string;
  description: string;
  averageRating: number;
};
