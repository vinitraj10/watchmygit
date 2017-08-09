import React,{Component} from "react";
import Commits from "./commits";

class CommitDetail extends Component{
	render(){
		return(
			<div className="columns">
				<Commits/>
				<div className="column col-6">There</div>
			</div>
		)
	}
} 
export default CommitDetail;