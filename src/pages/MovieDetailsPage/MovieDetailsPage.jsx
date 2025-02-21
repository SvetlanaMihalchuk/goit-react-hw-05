import css from "./MovieDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesDetails(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={css.container}>
      <Link to={goBackUrl.current} className={css.button}>
        Go back
      </Link>
      <h2 className={css.title}>{movie.title}</h2>
      <div className={css.aboutWithImage}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={css.aboutFilms}>
          <p className={css.text}>
            Genres: {movie.genres?.map((genre) => genre.name)}{" "}
          </p>
          <p className={css.text}>Popularity: {movie.popularity}</p>
          <p className={css.text}>Release date: {movie.release_date}</p>
          <p className={css.text}>Duration: {movie.runtime}</p>
          <p className={css.text}>{movie.overview}</p>
        </div>
      </div>
      <nav className={css.navigation}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
