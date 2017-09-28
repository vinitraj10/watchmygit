import React from 'react';

const Pull = (props) =>{
	const repo_name = props.commit.repo.name
	const url = props.commit.payload.pull_request.html_url;
	return(
		<div className="tile-content">
			<p className="tile-title">Created a P.R in <a href={url}><code className="pull">{repo_name}</code></a></p>
		</div>
	);
}

export default Pull;