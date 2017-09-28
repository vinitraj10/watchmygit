import React from 'react';

const Header = () => {
	return(
		<div className="container">
			<div className="columns col-header">
				<div className="column col-12">
					<header className="navbar">
					  <section className="navbar-section">
					    <a href="#" className="btn btn-link">Github</a>
					  </section>
					  <section className="navbar-center">
					    	<h5><a href="#" className="brand"><i className="fa fa-eye"></i>  <strong>WatchMyGit</strong></a></h5>
					  </section>
					  <section className="navbar-section">
					    <span className="badge" data-badge="New">
					    	<a href="#" className="btn btn-link">HacktoberFest-2k17</a>
					    </span>
					    <a href="#" className="btn btn-link">Git-Watcher</a>
					  </section>
					</header>
				</div>
			</div>
		</div>
	);
}

export default Header;