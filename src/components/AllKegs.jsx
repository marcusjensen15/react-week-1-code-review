import React from 'react';
import Keg from './Keg';

//will need to import new keg form

export default function AllKegs(){

  const textCenter = {
    textAlign: 'center',
    marginBottom: '10%'
  }

  const kegHeader = {
    fontSize: '5.5vh',
    paddingBottom: '3%',
    color: 'white'
  }

  // var masterKegList = [
  //   {
  //     name: 'Original Budweiser',
  //     brand: 'Budweiser',
  //     price: '$5/pint',
  //     alcoholContent:"3.2% ABV",
  //     kegVolume: "125"
  //   },
  //   {
  //     name: 'Coors Light',
  //     brand: 'Coors',
  //     price: '$5/pint',
  //     alcoholContent:"3.5% ABV",
  //     kegVolume: "125"
  //   },
  //   {
  //     names: 'Widmer Hef',
  //     brand: 'Widmer Bros',
  //     price: '$6/pint',
  //     alcoholContent:"5% ABV",
  //     kegVolume: "125"
  //   },
  //   {
  //     name:"Cream Ale",
  //     brand: "Pelican Brewing",
  //     price: "$6/pint",
  //     alcoholContent:"6.2% ABV",
  //     kegVolume: "125"
  //
  //   }
  // ];

  return(
    <div style={textCenter}>
      <h1 style={kegHeader}>All Available Kegs</h1>
      {masterKegList.map((keg,index) =>
        <Keg name={keg.name}
          brand= {keg.brand}
          price= {keg.price}
          alcoholContent={keg.alcoholContent}
          kegVolume={keg.kegVolume} />
      )}
    </div>
  );
}
