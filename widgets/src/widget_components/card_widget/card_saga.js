import { takeLatest, all, put, call } from "redux-saga/effects";
import axios from "axios";

import { CARD, LOADER } from "./actions/types";

const getCardsApi = () => {
  return axios.get(
    "https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad"
  );
};

const getCards = function* () {
  yield put({ type: LOADER, payload: true });
  try {
    const response = yield call(getCardsApi);
    yield put({ type: CARD.SET, payload: response.data });
  } catch (error) {
    yield put({ type: CARD.SET_ERROR, payload: error.message });
  } finally {
    yield put({ type: LOADER, payload: false });
  }
};

export default function* rootSaga() {
  yield all([takeLatest(CARD.FETCH, getCards)]);
}
