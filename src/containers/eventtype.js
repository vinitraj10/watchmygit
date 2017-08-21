import React,{Component} from "react";
import moment from 'moment';

export default class EventType extends Component{
	render(){
		const time = moment(this.props.commit.created_at).format("MMM Do YY");    
		return <span className="time"><i className="icon icon-time"></i> {time}</span>
	}
}