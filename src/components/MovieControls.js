import React from "react";
import { useMovieContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";
const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIES_TO_WATCHED,
                payload: movie,
              })
            }
            className="ctrl-btn">
            <i className="fa fa-eye" />
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIES_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn">
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIES_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="ctrl-btn">
            <i className="fa fa-eye-slash" />
          </button>
          <button
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIES_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn">
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
