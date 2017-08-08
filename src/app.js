import React from "react";
import {render} from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import ReduxThunk from "redux-thunk";
import App from "./components"
import rootReducer from "./reducers";

const store = applyMiddleware(ReduxThunk,createLogger())(createStore);

render(
	<Provider store = {store(rootReducer)} >
		<App/>
	</Provider>,
	document.getElementById('root')
);