import { legacy_createStore as createStore, combineReducers } from "redux";
import { articlesReducer } from "./reducers/articlesReducer";

const store = createStore(combineReducers({
	articles: articlesReducer
}));
export type RootState = ReturnType<typeof store.getState>
export default store;