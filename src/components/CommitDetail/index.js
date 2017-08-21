import React,{Component} from 'react';
import Push  from './push';
import Pull from './pull';
import Fork from './fork';
import Issues from './issues';
import Star from './star';
import Create from './create';
import Default from './default';
import Delete from './delete';

export default class CommitDetail extends Component{
	renderDetail(type,commit){
		const push = "Pushed";
		const fork = "Forked";
		const create = "Created";
		const star = "Starred";
		const del = "Deleted";
		const issue = "Issues";
		const pull = "Request"

		switch(type){
			case push:
				return <Push commit={commit}/>;
				break;
			case fork:
				return <Fork commit={commit}/>;
				break;
			case create:
				return <Create commit={commit}/>;
				break;
			case star:
				return <Star commit={commit}/>;
				break;
			case del:
				return <Delete commit={commit}/>;
				break;
			case issue:
				return <Issues commit={commit}/>;
				break;
			case pull:
				return <Pull commit={commit}/>;
				break;
			default:
				return <Default  commit={commit}/>;
				break;
		}
	}

	render(){
		const {commit,type} = this.props;
		const activeData = this.renderDetail(type,commit);
		return activeData;
	}
}