import React from 'react';

const Push = (props) =>{
	const msg = props.commit.payload.commits[0].message;
	const repo_name = props.commit.repo.name
	const head = props.commit.payload.head;
	const commit_url = `https://github.com/${repo_name}/commit/${head}/`
	const repo_url = `https://github.com/${repo_name}`;
	return(
		<div className="tile-content">
			<p className="tile-title">Commit <a href={commit_url} target="_blank"><code className="push">{msg}</code></a></p>
			<p className="tile-subtitle" href="#">in <a href={repo_url}>{repo_name}</a></p>
		</div>
	);
}

export default Push;