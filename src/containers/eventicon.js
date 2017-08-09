import React,{Component} from "react";

export default class EventType extends Component{
	checkicontype(commit){
		const push = "PushEvent";
		const fork = "ForkEvent";
		const create = "CreateEvent";
		const watch = "WatchEvent";
		const del = "DeleteEvent";

		switch(commit.type){
			case push:
				return "fa fa-upload";
				break;
			case fork:
				return "fa fa-code-fork";
				break;
			case create:
				return "fa fa-plus-circle";
				break;
			case del:
				return "fa fa-trash";
				break;
			case watch:
				return "fa fa-star";
				break;
			default:
				return "fa fa-question-circle";
				break;
		}
	}
	render(){
		const icon = this.checkicontype(this.props.commit);
		return <i className={icon} aria-hidden="true"></i>
	}
}