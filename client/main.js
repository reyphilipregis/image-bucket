import React, { Component } from 'react';
import ReactDOM  			from 'react-dom';
import Axios	 			from 'axios'
import ImageList 			from './components/image_list';

// create component
class App extends Component {
	constructor(props) {
		// call the parent (Component) constructor
		super(props);

		// initialize the state
		this.state = { images: [] };
	}

	// this function is called everytime the App component is called (called only once)
	componentWillMount() {
		// ajax request to get the images
		Axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
			.then((response) => { 
				this.setState({ images : response.data.data }); 
			}
		);
	}

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

} );
