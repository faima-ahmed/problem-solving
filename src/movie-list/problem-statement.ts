// CAUTION: Don't modify this file.

import { Actor, Movie, MovieCategory } from "./types";

/**
 * DONE: 1. Create a function to calculate the average rating of each movie category.
 */

function calculateAverageRating(
  movieCategories: MovieCategory[],
  movies: Movie[]
) {}

/**
 * DONE: 2. Create a function to find out all the movies above duration "X". For example, "X" can be 120 minutes.
 */

function findMoviesAboveDuration(duration: number, movies: Movie[]) {}

/**
 * DONE: 3. Find total duration per movie-category.
 */

/**
 * TODO: 4. Find top-rated actors in each movie and store it inside topRatedActorId on each movie.
 * DIFFICULTY: 3/5
 */
function findTopRatedActors(movies: Movie[], actors: Actor[]) {
  
}

/**
 * TODO: 5. Find the most popular movie (most rated) in each category.
 * DIFFICULTY: 3/5
 */
function findMostPopularMovies(
  movieCategories: MovieCategory[],
  movies: Movie[]
) {}

/**
 * TODO: 6. Find the most popular actor (most rated) in each movie-category and store it inside topRatedActorId on each movieCategory.
 * DIFFICULTY: 5/5
 */
function findMostPopularActorPerCategory(
  movieCategories: MovieCategory[],
  movies: Movie[],
  actors: Actor[]
) {}
