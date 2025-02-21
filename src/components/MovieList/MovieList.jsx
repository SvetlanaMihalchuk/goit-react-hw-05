import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((item) => (
        <li className={css.item} key={item.id}>
          <Link to={`/movies/${item.id.toString()}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
