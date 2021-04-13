import fetch from "node-fetch";

const URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, min_rating, quality) => {
  let req_url = URL;
  if (limit) req_url += "limit=" + limit;
  if (min_rating) req_url += "&minimum_rating=" + min_rating;
  if (quality) req_url += "&quality=" + quality;
  return fetch(req_url)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
