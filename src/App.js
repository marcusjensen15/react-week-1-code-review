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
}

handleAddingNewKegToList(newKeg){
var newMasterKegList = this.state.masterKegList.slice();
newMasterKegList.push(newKeg);
this.setState({masterKegList: newMasterKegList});
}




render(){

  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' render={()=><AllKegs kegList={this.state.masterKegList} />} />
           <Route exact path='/aboutapp' component={AboutApp} />
          <Route exact path='/newkegform' render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />


      </Switch>
    </div>
  );
}
}



export default App;
