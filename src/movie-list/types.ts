export type Movie = {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  genre: string;
  duration: number;
  director: string;
  actorIds: number[];
  topRatedActorId?: number;
};

export type MovieCategory = {
  name: string;
  movieIds: number[];
  title: string;
  description: string;
  averageRating: number;
  totalDuration?: number;
  topRatedActorId?: number;
};

export type Actor = {
  id: number;
  name: string;
  rating: number;
  bio?: string;
  age?: number;
  photos?: string[];
};
