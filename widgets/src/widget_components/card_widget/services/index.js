import { takeLatest, all, put, call } from "redux-saga/effects";
import axios from "axios";

import { CARD, LOADER } from "../store/types";
import { toggleLoader, setCards, setError } from "../store/action";

const getCardsApi = () => {
  return axios.get(
    "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
  );
};

export const getCards = function (dispatch, successhandler) {
  toggleLoader(dispatch);
  getCardsApi()
    .then((res) => {
      setCards(dispatch, res.data.card_groups);
      successhandler();
    })
    .catch((error) => {
      setError(dispatch, error.message);
    })
    .finally(() => {
      toggleLoader(dispatch);
    });
};
