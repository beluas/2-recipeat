import { takeLeading, put, call } from "redux-saga/effects";
//
const KEY = "4f7388d8cad840a0860d5395bf98acd3";

function* fetchRecipe(term = "meat") {
	const myTerm = yield localStorage.getItem("term") || term;

	const data = yield fetch(
		`https://api.spoonacular.com/recipes/search?query=${myTerm}&number=8&apiKey=${KEY}`
	);

	const recipes = yield data.json();
	return recipes;
}

export function* fetchRecipesSaga() {
	try {
		const data = yield call(fetchRecipe);
		yield put({ type: "FETCH_RECIPES", payload: data });
	} catch (err) {
		console.log(err.message);
	}
}

export function* watchFetchRecipesSaga() {
	yield takeLeading("FETCH_RECIPES", fetchRecipesSaga);
}
