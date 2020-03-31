import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";

export const generateStore = () => {
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [logger, sagaMiddleware];
	const store = createStore(rootReducer, applyMiddleware(...middlewares));
	sagaMiddleware.run(rootSaga);
	return store;
};
