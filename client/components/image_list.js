// import react
import React, { Component } from 'react';
import ImageDetail 			from './image_detail';

// create component
const ImageList = (props) => {
	const RenderedImages = props.images.map((image) => {
		return <ImageDetail key={image.title} image={image} />
	});

	return (
		<ul className="medial-list list-group">
			{RenderedImages}
		</ul>
	);
};

// export component
export default ImageList;
