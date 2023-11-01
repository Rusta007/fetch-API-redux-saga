import { call, put, takeLatest } from "redux-saga/effects";

function* fetchData() {
  try {
    const data = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
    );
    yield put({ type: "FECTCH_DATA_SUCCESS", data });
  } catch (error) {
    yield put({ type: "FETCH_DATA_ERROR", error });
  }
}

function* rootSaga(){
    yield takeLatest('FETCH_DATA_REQUEST', fetchData)

}

export default rootSaga;