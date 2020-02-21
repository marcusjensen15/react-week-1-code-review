import React from 'react';
import Keg from './Keg';

//will need to import new keg form

class AllKegs extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
}

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

  handleAddingNewKegToList(newKeg){
  var newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.push(newKeg);
  this.setState({masterKegList: newMasterKegList});
}

render(){
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
}

export default AllKegs;
