// TODO: Write your solutions here.
import { Movie, MovieCategory, Actor } from "./types";

import { movieCategories, movieList, actors } from "./data";

/**
 * TODO: Create a function to calculate the average rating of each movie category.
 */

function calculateAverageRatingPerCategory(
  movieCategories: MovieCategory[],
  movies: Movie[]
) {
  for (let i = 0; i < movieCategories.length; i++) {
    const category = movieCategories[i];

    const movieIds = category.movieIds;
    let totalMovieRatings = 0;
    movieIds.forEach((id) => {
      const foundMovie = movies.find((movie) => movie.id == id);
      totalMovieRatings += foundMovie?.rating || 0;
    });
    const averageRating = totalMovieRatings / movieIds.length;
    category.averageRating = averageRating;
  }
}
// calculateAverageRatingPerCategory(movieCategories, movieList);

// console.log(movieCategories);

// Accepted ✅
function findMoviesAboveDuration(duration: number, movies: Movie[]) {
  const result = movies.filter((movie) => {
    return movie.duration > duration;
  });
  return result;
}
// console.log(findMoviesAboveDuration(120, movieList));
// console.log(findMoviesAboveDuration(140, movieList));
// console.log(findMoviesAboveDuration(150, movieList));

//problem-3
function calculateTotalDurationForCategories(
  movieCategories: MovieCategory[],
  movies: Movie[]
) {
  for (let i = 0; i < movieCategories.length; i++) {
    const category = movieCategories[i];

    const movieIds = category.movieIds;
    let currentCategoryTotalDuration = 0;

    movieIds.forEach((id) => {
      const searchMovie = movies.find((movie) => movie.id == id);
      currentCategoryTotalDuration += searchMovie?.duration || 0;
    });
    const totalDuration = currentCategoryTotalDuration;
    category.totalDuration = totalDuration;
  }
}

//problem-4
function findTopRatedActors(movies: Movie[], actors: Actor[]) {
  return movies.map((movie) => {
    const movieActors = movie.actorIds
      .map((actorId) => actors.find((actor) => actor.id === actorId))
      .filter((actor) => actor !== undefined);

    const topRatedActor = movieActors.reduce((prev, current) =>
      prev.rating > current.rating ? prev : current
    );

    return {
      ...movie,
      topRatedActorId: topRatedActor.id,
    };
  });
}

const updatedMovieList = findTopRatedActors(movieList, actors);
console.log(updatedMovieList);
