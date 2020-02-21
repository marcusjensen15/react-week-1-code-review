// App Fundamentals
import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components

import AllKegs from './components/AllKegs';
// import Keg from './components/Keg';
import AboutApp from './components/AboutApp';
import NewKegForm from './components/NewKegForm';

import Header from './components/Header';


class App extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    masterKegList: []
  };
  this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  this.handleEditingKeg = this.handleEditingKeg.bind(this);
  this.testThing = this.testThing.bind(this);

}

handleAddingNewKegToList(newKeg){
var newMasterKegList = this.state.masterKegList.slice();
newMasterKegList.push(newKeg);
this.setState({masterKegList: newMasterKegList});
}

//expermental edit keg function below. this.id might be something like this.parent.id. may need to share id between the keg and the button somehow
handleEditingKeg(kegToBeEdited, revisedKeg){
var newMasterKegList = this.state.masterKegList.slice(); //copy of list
var editValueIndex = newMasterKegList.findIndex(x => x.id === this.id); //find index of thing we want to edit in the copy
newMasterKegList[editValueIndex] = revisedKeg

this.setState({masterKegList: newMasterKegList});
}

//expermental edit keg function above
testThing(){

  console.log('hello');
}




render(){

  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' render={()=><AllKegs kegList={this.state.masterKegList} onTestThing={this.testThing} />} />
           <Route exact path='/aboutapp' component={AboutApp} />
          <Route exact path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />


      </Switch>
    </div>
  );
}
}



export default App;
