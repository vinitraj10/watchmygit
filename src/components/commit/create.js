import React from 'react';

const Create = (props) =>{
	const repo_name = props.commit.repo.name;

	return(
		<div className="tile-content">
			<p className="tile-title">Created <code className="create">{repo_name}</code></p>
			
		</div>
	);
}

export default Create;