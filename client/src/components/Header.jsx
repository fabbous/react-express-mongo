import React from 'react';

var imgUrl = '/client/src/components/banner.jpg';

var divStyle = {
	backgroundColor: "#d5b4ca",
	height: "80px",
	padding: "5%"
}



var headerStyle = {
	color: 'white',
	fontFamily: 'bodoni',
	textAlign: 'center',
	fontSize: "60",
	padding: "0",
	margin: "0"
}


var headerStyle2 = {
	color: 'white',
	fontFamily: 'bodoni',
	textAlign: 'center',
	fontSize: "40",
	padding: "0",
	margin: "0"
}




const Header = () => (
    <div style={divStyle}>
        <h1 style={headerStyle}> WARDROBE WATCH </h1>
        <h2 style={headerStyle2}>Shop Affordably Without Sacrificing Your Style </h2>

    </div>
)

export default Header;
