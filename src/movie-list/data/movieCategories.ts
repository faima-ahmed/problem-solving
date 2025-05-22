import { MovieCategory } from "../types";

export const movieCategories: MovieCategory[] = [
  {
    name: "Action",
    movieIds: [1, 8, 12, 15, 22, 25, 28],
    title: "Action Movies",
    description:
      "A collection of action-packed movies that will keep you on the edge of your seat.",
    averageRating: 0, // To calculate
  },
  {
    name: "Comedy",
    movieIds: [2, 6, 11, 16, 19, 23, 26],
    title: "Comedy Movies",
    description:
      "A collection of hilarious comedies that will make you laugh out loud.",
    averageRating: 0, // To calculate
  },
  {
    name: "Drama",
    movieIds: [3, 7, 10, 14, 18, 21, 24],
    title: "Drama Movies",
    description:
      "A collection of dramatic movies that will tug at your heartstrings.",
    averageRating: 0, // To calculate
  },
  {
    name: "Horror",
    movieIds: [4, 5, 9, 13, 17, 20, 27],
    title: "Horror Movies",
    description:
      "A collection of spine-chilling horror movies that will keep you up at night.",
    averageRating: 0, // To calculate
  },
];
