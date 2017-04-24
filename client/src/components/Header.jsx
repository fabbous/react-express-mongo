import React from 'react';

var imgUrl = '/client/src/components/banner.jpg';

var divStyle = {
	backgroundColor: "#d5b4ca",
	height: "80px",
	padding: "5%"
}



var headerStyle = {
	color: 'lightBlack',
	fontFamily: 'bodoni',
	textAlign: 'center',
	padding: "0",
	margin: "0"
}




const Header = () => (
    <div style={divStyle}>
        <h1 style={headerStyle}> WARDROBE WATCH </h1>
        <h2 style={headerStyle}> Check out your recent sales! </h2>
    </div>
)

export default Header;
