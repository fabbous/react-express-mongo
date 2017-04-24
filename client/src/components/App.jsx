import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ItemsContainer from './ItemsContainer.jsx';

var imgUrl = '/client/src/components/banner.jpg';
// import ItemsList from './ItemsList.jsx';
// import ItemEntry from './ItemEntry.jsx';
// import Items from './items.js';

var divStyle1 = {
	
	height: "2000px"
}

var h1Style = {
	backgroundImage: 'url(' + imgUrl + ')',
	color: 'lightBlack',
	height: "20%",
	fontFamily: 'bodoni',
	textAlign: 'center',
	padding: "0",
	margin: "0"
}

var divStyle = {
	backgroundColor: "#d5b4ca",
	fontFamily: 'bodini',
	fontSize: "20",
	height: "80px",
	padding: "5%"
}




var buttonStyle = {
  display: 'inline-block',
  margin: "0 10px 0 0",
  padding: "15px 45px",
  fontSize: "30px",
  fontFamily: "Bitter",
  align: "center",
  boxShadow: "none",
  borderRadius: "0",
  margin: "1%"
}

var items = [
  {
    id: 0,
    description: "Mona Off-The-Shoulder Dress",
    image: "/client/src/components/mona.png",
    onSale: 'yes'
  },
  {
    id: 1,
    description: "Floral Burnout Kimono",
    image: "/client/src/components/kimono2.png",
    onSale: 'yes'
  },

  {
    id: 2,
    description: "Mahalia Kimono Cardigan NOW $69.95 ($128.00)",
    image: "./drssingroom_bg.jpg",
    onSale: 'yes'
  },
  {
    id: 3,
    description: "Roselle Sleeveless Top NOW $99.95 ($158.00)",
    image: "./dressinroom_bg.jpg",
    onSale: 'no'
  },
  {
    id: 4,
    description: "Cropped Baja Pullover NOW $49.95 ($58.00)",
    image: "./dresingroom_bg.jpg",
    onSale: 'no'
  },
];



const App = ({items}) => (
  <div style={divStyle1}>
    <h1 style={h1Style}> </h1>
     <div>
        <button id="show-all"style={buttonStyle}>Show All Sale Items</button>
        <div id="items" ></div>
    </div>
    {items.map(item => (
      // <div className="item" style={divStyle} key={item.description}>{item.description}</div>
       <div><img src={item.image} className="img-responsive"/></div>
    ))}
  </div>
); 

ReactDOM.render(<App items={items} />, document.getElementById('app'));



// class App extends React.Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: []
// 		};
// 	}






// 	render() {

// 		return (
// 		  <div>
// 		   <Header />
// 		   <hr/>
// 		   <ItemsContainer />
// 		   <hr/>
// 		  </div>

// 		)
// 	}
// }



export default App


