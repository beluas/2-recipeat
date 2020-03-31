import { all } from "redux-saga/effects";

import { fetchRecipesSaga, watchFetchRecipesSaga } from "./fetchRecipesSaga";

export function* rootSaga() {
	yield all([fetchRecipesSaga(), watchFetchRecipesSaga()]);
}
