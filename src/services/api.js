import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTRlYmQwODJiMGQyOTg5MTIzNGE5MmM3YTcyMjgwZiIsIm5iZiI6MTczOTg5MDYzOC45MzcsInN1YiI6IjY3YjQ5ZmNlOTFkN2U2NmM2NTZkZDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vKVlFybMEeMMWVoGAyAHXVvd_nJxbBgPqbbWSo1e3y8";

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?language=en-US`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

export const fetchMoviesDetails = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?language=en-US`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return [];
  }
};

export const fetchMoviesCast = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
      options
    );
    return data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return [];
  }
};

export const fetchMoviesReviews = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?language=en-US`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&language=en-US`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
