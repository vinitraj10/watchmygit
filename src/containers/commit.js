import React,{Component} from "react";
import {connect} from "react-redux";
import EventType from "./eventtype";
import CommitGraph from "./commitgraph"
import CommitDetail from '../components/CommitDetail';
import {Scrollbars} from "react-custom-scrollbars";

let subtitle="None";
let title = " " 
class Commit extends Component{
	filterCommit(commit){
		//console.log(commit);
		switch(commit.type){
			case "PushEvent":
				subtitle="vinit";
				return "Pushed";
				break;
			case "CreateEvent":
				subtitle="raj"
				return "Created";
				break;
			case "ForkEvent":
				return "Forked";
				break;
			case "WatchEvent":
				const payload = commit
				return "Starred";
				break;
			case "DeleteEvent":
				return "Deleted";
				break;
			case "IssuesEvent":
				return "Issues";
				break;
			case "PullRequestEvent":
				return "Request";
				break;
			default:
				return "None";
				break;
		}
	}
	renderEachCommit(commit){
		const type = this.filterCommit(commit);
		const title = commit.repo.name;
		const root_url = "https://github.com/";
		const url = `${root_url}${title}`;
		//console.log(subtitle);
		return(
			<div className="tile" key={commit.id}>
				<div className="tile-icon">
					<figure className="avatar">
						<img src={commit.actor.avatar_url}/>
					</figure>
				</div>
				<CommitDetail commit={commit} type={type}/>
				<div className="tile-action">
					<EventType commit={commit} type={type}/>
				</div>
			</div>
		);
	}
	render(){
		const all_commits = this.props.commits.commits;
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

