// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';


export default function Keg(props){


  const [level, setLevel] = useState(124);


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

if(props.kegVolume < 120){
  kegTextStyle.color = 'red';
}


//add test route button
  return(
    <div style={textCenter}>
      <div style={kegTextStyle}>

        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>Pints Remaining:{props.kegVolume}</p>
        <button style={buttonStyle} onClick={() => {onSellAPintCallback(props.id)}} > Pint Sold </button>
        <button id = {props.id} style={buttonStyle} onClick={() => {testThingCallback()}}> Edit Keg Details </button>
        <button id = {props.id} onClick={() => {testThingCallback()}}> <Link to='/newkegform'> Add a New Keg</Link></button>

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
  onSellAPint: PropTypes.func
}
