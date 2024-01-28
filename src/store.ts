import { legacy_createStore as createStore, combineReducers } from "redux";
import { articlesReducer } from "./reducers/articlesReducer";
import { abstractsReducer } from "./reducers/abstractsReducer";

const store = createStore(combineReducers({
	articles: articlesReducer,
	abstracts: abstractsReducer,
}));
export type RootState = ReturnType<typeof store.getState>
export default store;