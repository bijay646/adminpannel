import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
     users: userReducer
})

const middleware = [thunk]

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))