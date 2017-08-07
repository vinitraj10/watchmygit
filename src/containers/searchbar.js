import React , {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getUser} from "../actions";

class SearchBar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username: '',
		};
		this.HandleInput = this.HandleInput.bind(this);
		this.SearchUser =  this.SearchUser.bind(this);

	}
	HandleInput(event){
		this.setState({
			username : event.target.value
		});
	}
	SearchUser(event){
		event.preventDefault();
		this.props.getUser(this.state.username);
		this.setState({
			username:''
		})
	}
	render(){
		return (
			<div className="container">
				<div className = "columns content">
					<div className="column col-3"></div> 
					<div className = "column col-6">
						<form className="input-group" onSubmit={this.SearchUser}>
					  		<span className="input-group-addon addon-lg">github.com/</span>
					  		<input type="text" className="form-input input-lg" placeholder="your username" value={this.state.username} onChange={this.HandleInput}/>
					  		<button type= "submit" className="btn btn-primary input-group-btn btn-lg">Search</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getUser},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);