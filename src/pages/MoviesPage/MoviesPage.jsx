import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { searchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;
    const getMoviesData = async () => {
      const data = await searchMovies(query);
      setMovies(data);
    };
    getMoviesData();
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const value = e.target.query.value;
    setSearchParams({ query: value });
  };
  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Enter movie name"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
