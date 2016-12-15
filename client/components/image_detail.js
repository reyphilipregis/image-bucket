// import react
import React from 'react';

// create component
const ImageDetail = (props) => {
	// to access image property object use props.image

	return (
		<li className = "media list-group-item">

			<div className = "media-left">
				<img src = {props.image.link} />
			</div>

			<div className = "media-body">
				<h4 className = "media-heading">
					{props.image.title}
				</h4>
				<p>
					{props.image.description}
				</p>
			</div>

		</li>
	);
};

// export component
export default ImageDetail;
