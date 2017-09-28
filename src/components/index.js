import React from 'react';
import Header from '../components/layout/header';
import SearchBar from '../containers/searchbar';
import Content from '../containers/content';
const App = () => {
	return (
		<div>
			<Header/>
			<SearchBar/>
			<Content/>
		</div>
	)
}
export default App;