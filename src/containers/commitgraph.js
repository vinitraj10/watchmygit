import React,{Component} from "react";
import {connect} from "react-redux";
import {Pie} from "react-chartjs-2";

class CommitGraph extends Component{
	getEvents(){
		const eventSet = new Set();
		this.props.commits.commits.map((commit)=>{
			eventSet.add(commit.type);
		});
		const eventList = [...eventSet];
		return eventList;
	}
	getEventsVal(events){
		const val = []
		events.map((event)=>{
			let count = 0 ;
			this.props.commits.commits.map((commit)=>{
				if(event===commit.type)
					count+=1;
			});
			val.push(count);
		});
		return val;
	}
	renderGraph(){
		const events = this.getEvents();
		const events_val = this.getEventsVal(events);
		const data = {
			labels: events,
			datasets: [{
				data: events_val,
				backgroundColor: [
				'#2ca347',
				'#36A2EB',
				'#d1c21f'
				],
				hoverBackgroundColor: [
				'#2ca347',
				'#36A2EB',
				'#d1c21f'
				]
			}]
		};
		return(
			<div className="column col-12">
	        	<h2 className="text-center">Activity chart</h2>
	        	<Pie data={data} />
	      	</div>
		)
	}
	render(){
		return (
			<div className="container">
				<div className="columns">
					{this.renderGraph()}
				</div>
			</div>
		)
	}
}
function mapStateToProps(state){
	return{
		commits:state.commits,
	}
}

export default connect(mapStateToProps)(CommitGraph);