// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


export default function Keg(props){



  var kegTextStyle = {
    fontSize: '50px',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    border: '6px solid #eee',
    marginRight: '32%',
    marginBottom: '2%',
    marginLeft: '32%'

  }
  var textCenter = {
    color: 'white'
  }

  const buttonStyle ={

    height: '3vh',

    paddingTop: '1%',
    paddingBottom: '1%',
    marginTop: '4%',
    fontSize: '40%'
  }

  function testThingCallback(){
    props.onTestThing();
}

  function onSellAPintCallback(id){
    props.onSellAPint(id);
  }

  function onEditAKegCallback(id){
    props.onEditAKeg(id);
  }

if(props.kegVolume < 10){
  kegTextStyle.color = 'red';
}


//add test route button
  return(
    <div style={textCenter}>
      <div style={kegTextStyle}>

        <h3>Beer Name: {props.name}</h3>
        <h4>Beer Brand: {props.brand}</h4>
        <p>Price Per Pint: ${props.price}</p>
        <p>Alcohol Content: {props.alcoholContent}% ABV</p>
        <p>Pints Remaining:{props.kegVolume}</p>
        <button style={buttonStyle} onClick={() => {onSellAPintCallback(props.id)}} > Pint Sold </button>
        <button id = {props.id} style={buttonStyle} onClick={() => {onEditAKegCallback(props.id)}}> <Link to='/editkegform'> Edit This Keg</Link> </button>

      </div>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  kegVolume: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onTestThing: PropTypes.func,
  onSellAPint: PropTypes.func,
  onEditAKeg: PropTypes.func
}
