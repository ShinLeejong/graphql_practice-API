import { getMovies } from "./fetcher";

const myPersonality = {
  name: "Shin Leejong",
  age: 27,
};

const resolvers = {
  Query: {
    get_movies: (limit, min_rating, quality) =>
      getMovies(limit, min_rating, quality),
  },
};

export default resolvers;
