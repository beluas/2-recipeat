const initialState = { recipes: 0 };
const FETCH_RECIPES = "FETCH_RECIPES";

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_RECIPES:
			return {
				...state,
				recipes: payload,
			};
		default:
			return state;
	}
};

export default rootReducer;
