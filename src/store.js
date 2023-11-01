import createSagaMiddleware from "@redux-saga/core";
import {createStore, applyMiddleware } from "redux";
import rootReducer from './reducer';
import rootSaga from "./saga";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store