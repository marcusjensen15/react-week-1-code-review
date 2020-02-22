import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

//will need to import new keg form

export default function AllKegs(props){

  const textCenter = {
    textAlign: 'center',
    marginBottom: '10%'
  }

  const kegHeader = {
    fontSize: '5.5vh',
    paddingBottom: '3%',
    color: 'white'
  }


  return(
    <div style={textCenter}>
      <h1 style={kegHeader}>All Available Kegs</h1>
      {props.kegList.map((keg,index) =>
        <Keg name={keg.name}
          brand= {keg.brand}
          price= {keg.price}
          alcoholContent={keg.alcoholContent}
          kegVolume={keg.kegVolume}
          id={keg.id}
          onTestThing= {props.onTestThing}
          onSellAPint = {props.onSellAPint}
          onEditAKeg = {props.onEditAKeg}  />
      )}
    </div>
  );
}

  AllKegs.propTypes = {
    kegList: PropTypes.array,
    onTestThing: PropTypes.func,
    onSellAPint: PropTypes.func,
    onEditAKeg: PropTypes.func
  };
