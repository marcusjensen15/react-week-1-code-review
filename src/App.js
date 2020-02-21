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
      masterKegList: [],
      editingKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleEditingKeg = this.handleEditingKeg.bind(this);
    //uncommented testThing to try and get state to update. may need another function to set the state.
    // this.testThing = this.testThing.bind(this);
    // this.setEditingKeg = this.setEditingKeg.bind(this);

  }

  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
    // console.log(this.state.masterKegList);
  }

  //expermental edit keg function below. this.id might be something like this.parent.id. may need to share id between the keg and the button somehow
  handleEditingKeg(kegToBeEdited, revisedKeg){
    var newMasterKegList = this.state.masterKegList.slice(); //copy of list
    var editValueIndex = newMasterKegList.findIndex(x => x.id === this.id); //find index of thing we want to edit in the copy
    newMasterKegList[editValueIndex] = revisedKeg

    this.setState({masterKegList: newMasterKegList});

  }

  //expermental edit keg function above

  //test thing is sucessfully getting back the id of the button corresponding to the clicked keg.

  // setEditingKeg(test){
  //
  //   this.setState({editingKeg: test});
  //   console.log(this.state.editingKeg);
  // }

  testThing(){

    // var test = console.log(this.id);
    var bacon = this.id;
    return bacon;

    // this.setEditingKeg(bacon);

    // return test
  }

  //experiemnting with edit keg route.


  render(){

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><AllKegs kegList={this.state.masterKegList} onTestThing={this.testThing} />} />
          <Route exact path='/aboutapp' component={AboutApp} />
          <Route exact path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route exact path='/editkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />


        </Switch>
      </div>
    );
  }
}



export default App;
