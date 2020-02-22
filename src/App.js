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
      editKegId: null,
      editKegVol: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.editAKeg = this.editAKeg.bind(this);
    this.sellAPint = this.sellAPint.bind(this);

  }

  async  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    await  this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  async editAKeg(id){
    var newMasterKegList = this.state.masterKegList;
    var newEditKegId = this.state.editKegId;
    var newEditKegVol = this.state.editKegVol;
    newEditKegId = id;
    await this.setState({editKegId: newEditKegId});

    for(var i = 0; i < newMasterKegList.length; i++){

      if(newMasterKegList[i].id === id){
        newEditKegVol = newMasterKegList[i].kegVolume;
        await this.setState({editKegVol: newEditKegVol});
        console.log(this.state)
      }
    }
  }

  testThing(){
    var bacon = this.id;
    console.log(bacon);
  }

  async sellAPint(id){
    var newMasterKegList = this.state.masterKegList;
    for (var i = 0; i < newMasterKegList.length; i++) {
      if(newMasterKegList[i].id === id){
        newMasterKegList[i].kegVolume -= 1;
      }
    }
    await  this.setState({masterKegList: newMasterKegList});
    console.log(this.state.masterKegList);
  }

  //experiemnting with edit keg route.


  render(){

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><AllKegs kegList={this.state.masterKegList} onTestThing={this.testThing} onSellAPint={this.sellAPint} onEditAKeg={this.editAKeg} />} />
          <Route exact path='/aboutapp' component={AboutApp} />
          <Route exact path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route exact path='/editkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />


        </Switch>
      </div>
    );
  }
}



export default App;
