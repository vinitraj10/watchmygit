import React from "react";

const Err = (props) => {
	return(
		<div  className="columns">
			<div className="column col-3"></div>
			<div className ="column col-6">
				<div className="toast toast-error">
				  	{props.msg}
				</div>
			</div>
		</div>
	);
}

export default Err;