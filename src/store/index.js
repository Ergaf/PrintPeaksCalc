import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {filesReducer} from "./filesReducer";
import thunk from "redux-thunk";
import {pricesReducer} from "./getPricesReducer";
import {ThisFileReducer} from "./thisFileReducer";

const rootReducer = combineReducers({
    cash: cashReducer,
    files: filesReducer,
    prices: pricesReducer,
    file: ThisFileReducer
})

export const index = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))