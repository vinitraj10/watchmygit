import React,{Component} from 'react';
import {Route , Link } from 'react-router-dom';
import SearchBar from '../../containers/searchbar';
import Hack from '../hck2k17';

class Header extends Component{
	render(){
		return(
			<div>
				<div className="container">
					<div className="columns col-header">
						<div className="column col-12">
							<header className="navbar">
							  <section className="navbar-section">
							    <a href="#" className="btn btn-link">Github</a>
							  </section>
							  <section className="navbar-center">
							    	<h5>
							    		<a href="#" className="brand">
							    			<i className="fa fa-eye"></i>  <strong>WatchMyGit</strong>
							    		</a>
							    	</h5>
							  </section>
							  <section className="navbar-section">
							    <span className="badge" data-badge="New">
							    	<Link to="/hckoct2k17" className="btn btn-link">HacktoberFest-2k17</Link>
							    </span>
							    <Link to="/" className="btn btn-link">Git-Watcher</Link>
							  </section>
							</header>
						</div>
					</div>
				</div>
				<Route exact path="/"component={SearchBar}/>
				<Route path="/hckoct2k17" component={Hack}/>
			</div>
		);
	}

}

export default Header;