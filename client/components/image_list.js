// import react
import React, { Component } from 'react';
import ImageDetail 			from './image_detail';

// create component
const ImageList = (props) => {
	// create validImages variable to filter only images (not is_album = true)
	const validImages    = props.images.filter( (image) => {
		return !image.is_album;
	} );

	// create RenderedImages variable to loop the images and create an ImageDetail component
	const RenderedImages = validImages.map((image) => {
		return <ImageDetail key={image.title} image={image} />
	});

	return (
		<ul className = "medial-list list-group">
			{RenderedImages}
		</ul>
	);
};

// export component
export default ImageList;
