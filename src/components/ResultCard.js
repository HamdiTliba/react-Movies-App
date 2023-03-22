import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import "./ResultCard.css";
import * as actions from "./context/ActionTypes";
const ResultCard = ({ movies }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movies.imdbID
  );
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movies.imdbID
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movies.Poster ? (
          <img src={movies.Poster} alt={movies.Title} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movies.Title}</h3>
          {movies.Year ? <h4 className="release-date">{movies.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIES_TO_WATCHLIST,
                payload: movies,
              })
            }
            className="btn"
            disabled={watchlistDisabled}>
            Add to Watchlist
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIES_TO_WATCHED,
                payload: movies,
              })
            }
            className="btn"
            disabled={watchedDisabled}>
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
