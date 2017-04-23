import React from 'react';

import Header from './Header.jsx';


var appStyle = {
	backgroundColor: '#f9f9f9',


}

var textStyle = {
	color: 'black',
	font: 'verdana',
	textAlign: 'center'
}


class App extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			phrases: []
		}
	}

	render() {
		return (
			<div style = {appStyle} className="App">
			  <div className="App-header" style={appStyle}>
			    <h2 style ={textStyle}>Welcome to Wardrobe Watch</h2>
			  </div>
			 <Header />
			 <hr />
			</div>

		)
	}
}

export default App