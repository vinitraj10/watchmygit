import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import Main from './components'

const store = applyMiddleware(ReduxThunk)(createStore);

render(
	<Provider store = {store(rootReducer)}>
		<Main/>
	</Provider>,
	document.getElementById('root')
);