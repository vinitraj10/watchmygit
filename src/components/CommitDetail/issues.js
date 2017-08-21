import React from 'react';

const Issues = (props) =>{
	const issue_type = props.commit.payload.action;
	const repo_name = props.commit.repo.name;
	
	const issue_url = props.commit.payload.issue.html_url
	return(
		<div className="tile-content">
			<p className="tile-title">{issue_type} <a href={issue_url}><code className="issue">issue</code></a> in {repo_name}</p>
		</div>
	);
}

export default Issues;