// import react
import React from 'react';

// create component
const ImageScore = (props) => {
	// props.ups  upvotes
	// props.downs downvotes

	const { ups, downs } = props;
	const upsPercent     = `$(100 * (ups / (ups + downs)))%`;
	const downsPercent   = `$(100 * (downs / (ups + downs)))%`;

	return (
		<div>
			Ups/Downs
			<div className = "progress">
				<div style = {{ width: upsPercent }} className = "progress-bar progress-bar-success progress-bar-striped"></div>
				<div style = {{ width: downsPercent }} className = "progress-bar progress-bar-danger progress-bar-striped"></div>
			</div>
		</div>
	);
};

// export component
export default ImageScore;
