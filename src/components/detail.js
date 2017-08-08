import React from "react";

const Detail = (props) =>{
	return (
		<div className="columns">
			<div className="column col-2">
				<div className="card">
				  <div className="card-image">
				    <img src={props.user.avatar_url} className="img-responsive" />
				  </div>
				  <div className="card-header">
				    <h4 className="card-title">{props.user.name}</h4>
				    <h6 className="card-subtitle">{props.user.bio}</h6>
				  </div>
				</div>
			</div>
		</div>
	);
}
export default Detail;