import React from "react";
import {render} from "react-dom";
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import ReduxPromise from "redux-promise";
import App from "./components"
import rootReducer from "./reducers";

const store = applyMiddleware(ReduxPromise,createLogger())(createStore);

render(
	<Provider store = {store(rootReducer)} >
		<App/>
	</Provider>,
	document.getElementById('root')
);