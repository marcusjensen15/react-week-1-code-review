import React from 'react';
import PropTypes from 'prop-types';

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


  return(
    <div style={textCenter}>
      <div style={kegTextStyle}>

        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <p>{props.price}</p>
        <p>{props.alcoholContent}</p>
        <p>Pints Remaining: {props.kegVolume}</p>
        <button style={buttonStyle}> Pint Sold </button>
        <button id = {props.id} style={buttonStyle} onClick={() => {this.testThingCallback}}> Edit Keg Details </button>

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
  onTestThing: PropTypes.func
}
