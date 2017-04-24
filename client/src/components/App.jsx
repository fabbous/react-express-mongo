import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ItemsContainer from './ItemsContainer.jsx';

var imgUrl = '/client/src/components/banner.jpg';
// import ItemsList from './ItemsList.jsx';
// import ItemEntry from './ItemEntry.jsx';
// import Items from './items.js';

var divStyle1 = {
	backgroundColor: "#d5b4ca",
	textSize: "50px",
	
	height: "3000px"
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
	fontSize: "50",
	height: "80px",
	padding: "5%"
}




var buttonStyle = {
  display: 'inline-block',
  margin: "0 10px 0 0",
  padding: "15px 45px",
  fontSize: "20px",
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
    description: "Cropped Baja Pullover",
    image: "/client/src/components/hat.png",
    onSale: 'yes'
  },
  {
    id: 3,
    description: "Metallic Bomber",
    image: "/client/src/components/bomber1.png",
    onSale: 'no'
  },
  {
    id: 4,
    description: "Reverie Sweater Dress",
    image: "/client/src/components/sweaterdress1.png",
    onSale: 'no'
  },
];



const App = ({items}) => (
  <div style={divStyle1}>
  <div>
    <Header style={divStyle1}/>
    </div>
    <hr/>

     <div>
        <button id="show-all"style={buttonStyle}>Show Your Items</button>
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


