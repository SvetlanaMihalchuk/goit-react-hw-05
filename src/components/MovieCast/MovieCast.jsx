import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesCast(movieId);
      setCast(data || []);
    };
    getData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Cast </h2>
      <ul className={css.list}>
        {cast.map((item) => (
          <li className={css.item} key={item.id}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
            />
            <p className={css.text}>Name: {item.name} </p>
            <p className={css.text}>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
