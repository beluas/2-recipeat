const initialState = { recipes: 0 };
const FETCH_RECIPES = "FETCH_RECIPES";
const FETCH_SEARCHED_RECIPES = "FETCH_SEARCHED_RECIPES";

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_RECIPES:
			return {
				...state,
				recipes: payload
			};

		// case FETCH_SEARCHED_RECIPES:
		// 	return {
		// 		...state,
		// 		recipes: payload
		// 	};
		default:
			return state;
	}
};

export default rootReducer;
