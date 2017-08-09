import React,{Component} from "react";
import Graphic from "./graphic";

export default class Detail extends Component{
	render(){
		return (
				<div className="columns">
					<div className="column col-2">
						<div className="card">
						  <div className="card-image">
						    <img src={this.props.user.avatar_url} className="img-responsive" />
						  </div>
						  <div className="card-header">
						    <h4 className="card-title">{this.props.user.name}</h4>
						    <h6 className="card-subtitle">{this.props.user.bio}</h6>
						  </div>
						</div>
					</div>
					<div className="column col-10">
						<Graphic username={this.props.user.login}/>
					</div>
				</div>
				
		);
	}
	
}
