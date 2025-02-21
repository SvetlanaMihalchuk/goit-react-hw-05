import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchMoviesReviews } from "../../services/api";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Reviews</h2>
      <ul className={css.list}>
        {reviews.map((item) => (
          <li className={css.item} key={item.id}>
            <p className={css.text}>Author: {item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
