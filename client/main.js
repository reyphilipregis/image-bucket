import React, { Component } from 'react';
import ReactDOM  			from 'react-dom';
import Axios	 			from 'axios'
import ImageList 			from './components/image_list';

// create component
class App extends Component {
	render() {
		return (
			<div>
				<ImageList />
			</div>
		);
	}
};

// run the anonymous function after meteor loaded all files
Meteor.startup( () => {

	// render the application component
	ReactDOM.render( <App />, document.querySelector('.container') );

	// temporary ajax request using axios
	Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
		.then((response) => { 
					console.log(response) 
		}
	);

} );
