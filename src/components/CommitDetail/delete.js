import React from 'react';


const Delete = (props) =>{
	const repo_name = props.commit.repo.name
	const repo_url = `https://github.com/${repo_name}`;
	return(
		<div className="tile-content">
			<p className="tile-title">Deleted <code>{props.commit.payload.ref}</code> {props.commit.payload.ref_type}</p>
			<p className="tile-subtitle">in <a href={repo_url}>{repo_name}</a></p>
		</div>
	);
}

export default Delete;