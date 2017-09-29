import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getPr} from '../../actions/hck2k17';
import Result from './result';

class Search extends Component{
	constructor(props) {
		super(props);
		this.state={
			username:""
		}
		this.HanleChange = this.HanleChange.bind(this);
		this.findPr = this.findPr.bind(this);
	}

	HanleChange(event){
		this.setState({
			username:event.target.value
		});
	}

	findPr(event){
		event.preventDefault();
		this.props.getPr(this.state.username);
		this.setState({
			username:""
		})
	}
	render(){
		return(
			<div className = "container">
				<div className = "columns content">
					<div className="column col-12">
						<h3 className="text-center hckHeader">
							Find Whether You are getting a T-shirt
							or Not In HactoberFest 2k17
						</h3>
					</div>
					<div className="column col-3"></div> {/*Use offset container div tags */}
					<div className = "column col-6">
						<form className="input-group" onSubmit={this.findPr}>
					  		<input type="text" 
					  			className="form-input input-lg"
					  		 	placeholder="Enter your github username" 
					  		 	onChange={this.HanleChange}
					  		 	value={this.state.username}
					  		/>
					  		<button type= "submit" className="btn btn-hck input-group-btn btn-lg">Find It!</button>
						</form>
					</div>
				</div>
				<Result data ={this.props.hck}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		hck:state.hck
	}
}

export default connect(mapStateToProps,{getPr})(Search);