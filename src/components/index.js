import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/layout/header';
const Main = () => {
	return (
		<Router>
			<Header/>
		</Router>
	)
}
export default Main;