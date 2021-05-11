import { CARD, LOADER } from "./types";
import { INITIAL_STATE } from "./initialState";

const cardReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADER:
      state.LOADER = !state.LOADER;
      return state;
    case CARD.SET:
      state.CARD_LIST = [...payload];
      return state;
    case CARD.SET_ERROR:
      state.ERROR = payload;
      return state;
    case CARD.CLEAR_ERROR:
      state.ERROR = "";
      return state;
    default:
      return state;
  }
};

export default cardReducer;
