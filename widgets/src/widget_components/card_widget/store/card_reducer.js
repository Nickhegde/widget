import { CARD, LOADER } from "./types";
import { INITIAL_STATE } from "./initialState";

const cardReducer = (state, action) => {
  const { type, payload, onSuccessHandler } = action;
  switch (type) {
    case LOADER:
      state.LOADER = !state.LOADER;
      return state;
    case CARD.SET:
      state.CARD_LIST = [...payload];
      return state;
    case CARD.REMIND:
      const { id, index } = payload;
      const cardIndex = state.CARD_LIST.findIndex(
        (element) => element.id === id
      );
      state.CARD_LIST[cardIndex].cards.splice(index, 1);
      onSuccessHandler();
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
