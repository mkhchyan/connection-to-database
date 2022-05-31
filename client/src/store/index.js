import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { dataReducer } from "./datas/reducer";
import root from "./root";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(root, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
