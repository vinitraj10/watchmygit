import React,{Component} from "react";
import {connect} from "react-redux";
import EventType from "./eventtype";
import CommitGraph from "./commitgraph"
import {Scrollbars} from "react-custom-scrollbars";

class Commit extends Component{
	filterCommit(commit){
		switch(commit.type){
			case "PushEvent":
				return "Created a commit";
				break;
			case "CreateEvent":
				return "Created a Repositiory";
				break;
			case "ForkeEvent":
				return "Forked a repositiory";
				break;
			case "WatchEvent":
				return "Starred Repo";
				break;
			case "DeleteEvent":
				return "Deleted";
				break;
			case "IssueEvent":
				return "Created an issue";
				break;
			default:
				return "None";
				break;
		}
	}
	renderEachCommit(commit){
		const type = this.filterCommit(commit);
		return(
			<div className="tile" key={commit.id}>
				<div className="tile-icon">
					<figure className="avatar">
						<img src={commit.actor.avatar_url}/>
					</figure>
				</div>
				<div className="tile-content">
					<p className="tile-title">{commit.type}</p>
					<p className="tile-subtitle">{type}</p>
				</div>
				<div className="tile-action">
					<span className="label label-primary">{commit.type}</span>
				</div>
			</div>
		);
	}
	render(){
		const all_commits = this.props.commits.commits;
		console.log(all_commits);
		return(
			<div className ="columns">
				<div className="column col-6 col-xs-12">
					<div className="panel">
						<div className="panel-header">
							<div className="panel-title"><h2 className="text-center">Commits Detail</h2></div>
						</div>
						<Scrollbars style={{height:300}}>	
							<div className="panel-body">
								{all_commits.map(this.renderEachCommit.bind(this))}
							</div>
						</Scrollbars>
					</div>
				</div>
				<div className="column col-6 col-xs-12">
					<CommitGraph/>
				</div>
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

