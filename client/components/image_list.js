// import react
import React 	   from 'react';
import ImageDetail from './image_detail';

// create dummy list of images
const IMAGES = [
	{
		'title' : 'Pen',
		'link'  : 'https://dummyimage.com/600x400'
	},
	{
		'title' : 'Pine Tree',
		'link'  : 'https://dummyimage.com/600x400'
	},
	{
		'title' : 'Mug',
		'link'  : 'https://dummyimage.com/600x400'
	}
];

// create component
const ImageList = () => {
	const RenderedImages = IMAGES.map((image) => {
		return <ImageDetail image={image} />
	});

	return (
		<ul>
			{ RenderedImages }
		</ul>
	);
};

// export component
export default ImageList;
