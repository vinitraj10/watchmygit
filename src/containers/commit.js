import React,{Component} from "react";
import {connect} from "react-redux";
import EventType from "./eventtype";

class Commit extends Component{
	renderEachCommit(commit){
		return(
			<div className="column col-6" key={commit.id}>
				<div className="panel">
				  <div className="panel-header">
				    <div className="panel-title">Commits</div>
				  </div>
				  <div className="panel-body">
				   <div className="tile">
				  <div className="tile-icon">
			     	<figure className="avatar avater-xl">
					  <img src={commit.actor.avatar_url}/>
					</figure>
				  </div>
				  <div className="tile-content">
				    <p className="tile-title">{commit.repo.name}</p>
				    <p className="tile-subtitle">demo</p>
				  </div>
				  <div className="tile-action">
				    <EventType commit = {commit}/>
				  </div>
				</div>
				  </div>
				</div>
			</div>
		);
	}
	render(){
		const all_commits = this.props.commits.commits;
		return(
			<div className= "columns">
				{all_commits.map(this.renderEachCommit)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		commits:state.commits,
	}
}

export default connect(mapStateToProps)(Commit);

