// import react
import React from 'react';

// create component
const ImageDetail = (props) => {
	// to access image property object use props.image

	return (
		<li>
			<img src={props.image.link} />
			{props.image.title}
		</li>
	);
};

// export component
export default ImageDetail;
