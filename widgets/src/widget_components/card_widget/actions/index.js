import { CARD } from "./types";

export const fetchCards = (dispatch) => {
  dispatch({
    type: CARD.FETCH,
  });
};

export const removeCard = (dispatch, index) => {
  dispatch({
    type: CARD.REMOVE,
    payload: index,
  });
};

export const remindCard = (dispatch, index) => {
  dispatch({
    type: CARD.REMIND,
    payload: index,
  });
};
