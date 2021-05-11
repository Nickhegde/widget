import { CARD, LOADER } from "./types";

export const toggleLoader = (dispatch) => {
  dispatch({
    type: LOADER,
  });
};

export const setCards = (dispatch, list) => {
  dispatch({
    type: CARD.SET,
    payload: list,
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

export const setError = (dispatch, error) => {
  dispatch({
    type: CARD.SET_ERROR,
    payload: error,
  });
};

export const clearError = (dispatch) => {
  dispatch({
    type: CARD.SET_ERROR,
    payload: "",
  });
};
