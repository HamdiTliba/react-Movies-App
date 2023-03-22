import * as actions from "./ActionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIES_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.REMOVE_MOVIES_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    case actions.MOVE_TO_WATCHLIST:
      return {
        ...state,
        watched: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case actions.ADD_MOVIES_TO_WATCHED:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
        watched: [action.payload, ...state.watched],
      };
    case actions.REMOVE_MOVIES_FROM_WATCHED:
      return {
        ...state,
        watched: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
