import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const films = await fetchTrendingMovies();
        setMovies(films);
      } catch (error) {
        console.log(Error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Trending movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
