// TODO: Write your solutions here.
import { Movie, MovieCategory } from "./types";

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
