// CAUTION: Don't modify this file.

import { Movie, MovieCategory } from "./types";

const movieCategories: MovieCategory[] = [
  {
    name: "Action",
    movieIds: [1, 2],
    title: "Action Movies",
    description:
      "A collection of action-packed movies that will keep you on the edge of your seat.",
    averageRating: 0, // To calculate
    totalDuration: undefined, // To calculate
  },
  {
    name: "Comedy",
    movieIds: [3, 4],
    title: "Comedy Movies",
    description:
      "A collection of hilarious comedies that will make you laugh out loud.",
    averageRating: 0, // To calculate
  },
  {
    name: "Drama",
    movieIds: [5, 6],
    title: "Drama Movies",
    description:
      "A collection of dramatic movies that will tug at your heartstrings.",
    averageRating: 0, // To calculate
  },
  {
    name: "Horror",
    movieIds: [7, 8],
    title: "Horror Movies",
    description:
      "A collection of spine-chilling horror movies that will keep you up at night.",
    averageRating: 0, // To calculate
  },
];

const movies: Movie[] = [
  {
    id: 1,
    title: "Die Hard",
    description:
      "A New York City police officer tries to save his wife and several others taken hostage by terrorists.",
    releaseDate: "1988-07-20",
    rating: 8.2,
    genre: "Action",
    duration: 132,
    director: "John McTiernan",
    cast: [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia",
      "Reginald VelJohnson",
    ],
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    description:
      "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant.",
    releaseDate: "2015-05-15",
    rating: 8.1,
    genre: "Action",
    duration: 120,
    director: "George Miller",
    cast: [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays-Byrne",
    ],
  },
  {
    id: 3,
    title: "Superbad",
    description:
      "Two high school friends try to enjoy one last party before graduation.",
    releaseDate: "2007-08-17",
    rating: 7.6,
    genre: "Comedy",
    duration: 113,
    director: "Greg Mottola",
    cast: [
      "Jonah Hill",
      "Michael Cera",
      "Christopher Mintz-Plasse",
      "Emma Stone",
    ],
  },
  {
    id: 4,
    title: "The Hangover",
    description:
      "Three friends wake up from a bachelor party in Las Vegas with no memory of the previous night.",
    releaseDate: "2009-06-05",
    rating: 7.7,
    genre: "Comedy",
    duration: 100,
    director: "Todd Phillips",
    cast: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Justin Bartha"],
  },
  {
    id: 5,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    releaseDate: "1994-09-23",
    rating: 9.3,
    genre: "Drama",
    duration: 142,
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
  },
  {
    id: 6,
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of Forrest Gump.",
    releaseDate: "1994-07-06",
    rating: 8.8,
    genre: "Drama",
    duration: 142,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
  },
  {
    id: 7,
    title: "The Conjuring",
    description:
      "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.",
    releaseDate: "2013-07-19",
    rating: 7.5,
    genre: "Horror",
    duration: 112,
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor", "Ron Livingston"],
  },
  {
    id: 8,
    title: "Get Out",
    description:
      "A young African-American visits his white girlfriend's parents for the weekend and uncovers disturbing secrets.",
    releaseDate: "2017-02-24",
    rating: 7.7,
    genre: "Horror",
    duration: 104,
    director: "Jordan Peele",
    cast: [
      "Daniel Kaluuya",
      "Allison Williams",
      "Bradley Whitford",
      "Catherine Keener",
    ],
  },
];

/**
 * TODO: Create a function to calculate the average rating of each movie category.
 */

function calculateAverageRating(
  movieCategories: MovieCategory[],
  movies: Movie[]
) {}

/**
 * TODO: Create a function to find out all the movies above duration "X". For example, "X" can be 120 minutes.
 */

function findMoviesAboveDuration(duration: number, movies: Movie[]) {}


/**
 * TODO: Find total duration per movie-category. 
 */