import React,{Component} from "react";
import EventIcon from "./eventicon";
export default class EventType extends Component{
	checktype(commit){
		const push = "PushEvent";
		const fork = "ForkEvent";
		const create = "CreateEvent";
		const watch = "WatchEvent";
		const del = "DeleteEvent";

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
			case del:
				return "label label-error";
				break;
			default:
				return "label";
				break;
		}
	}
	render(){
		const span = this.checktype(this.props.commit);
		return <span className={span}><EventIcon commit={this.props.commit}/> {this.props.commit.type}</span>
	}
}