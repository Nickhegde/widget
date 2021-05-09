import { CARD } from "./actions/types";

const INITIAL_STATE = {
  CARD_LIST: [],
  ERROR: "",
};

const rootReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
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

export default rootReducer;
