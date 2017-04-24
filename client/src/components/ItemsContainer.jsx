import React from 'react';

var buttonStyle = {
  display: 'inline-block',
  margin: "0 10px 0 0",
  padding: "15px 45px",
  fontSize: "30px",
  fontFamily: "Bitter",
  lineHeight: "1.8",
  boxShadow: "none",
  borderRadius: "0"
}

const ItemsContainer = () => (
    <div>
        <button id="show-all"style={buttonStyle}>Show All Sale Items</button>
        <div id="items" ></div>
    </div>
);

export default ItemsContainer;



