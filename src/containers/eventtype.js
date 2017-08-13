import React,{Component} from "react";
export default class EventType extends Component{
	checktype(commit){
		const push = "PushEvent";
		const fork = "ForkEvent";
		const create = "CreateEvent";
		const star = "WatchEvent";
		const del = "DeleteEvent";
		const issue = "IssuesEvent";
		const pull = "PullRequest"

		switch(commit.type){
			case push:
				return "label label-primary";
				break;
			case fork:
				return "label label-warning";
				break;
			case create:
				return "label label-success";
				break;
			case star:
				return "label label-star";
				break;
			case del:
				return "label label-del";
				break;
			case issue:
				return "label label-issue";
				break;
			case pull:
				return "label label-req";
				break;
			default:
				return "label label-rest";
				break;
		}
	}
	render(){
		const span = this.checktype(this.props.commit);
		return <span className={span}>{this.props.type}</span>
	}
}