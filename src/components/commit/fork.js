import React from 'react';

const Fork = (props) =>{
	const repo_name = props.commit.repo.name;
	const repo_url = `https://github.com/${repo_name}`;
	return(
		<div className="tile-content">
			<p className="tile-title">Forked <a href={repo_url}><code className="fork">{repo_name}</code></a></p>
		</div>
	);
}

export default Fork;