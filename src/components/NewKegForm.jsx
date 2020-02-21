import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';



//will need to import new keg form

export default function NewKegForm(props){

  let _name = null;
  let _brand = null;
  let _alcoholContent = null;

  const textCenter = {
    textAlign: 'center',
    fontSize: '2vh'
  }
  const newBeerHeader = {
    marginBottom: '4vh'
  }

  const formWrap = {
    backgroundColor: '#fcface',
    border: 'thick solid #fcface',
    borderRadius: '20px',
    padding: '0 40px',
    boxShadow: '-2px 10px 20px #40403F',
    color: 'black',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: '6%'
  }

  const listStyle = {
    listStyle: 'none'
  }

  const submitButtonStyle = {

    marginTop: '4%',
    border: 'none',
    textAlign: 'center',
    fontSize: '20px'

  }

  const buttonSize = {
    fontSize: '50px'
  }
  const inputPadding = {
    marginBottom: '60px'

  }
  const input = {
    width: '60%',
    marginTop: '2.5%'
  }

  function handleNewKegFormSubmission(event) {
  event.preventDefault();
  props.onNewKegCreation({name: _name.value, brand: _brand.value, alcoholContent: _alcoholContent.value, id: v4(), kegVolume: 125});
  _name.value = '';
  _brand.value = '';
  _alcoholContent.value = '';
    }

  return(

    <div style={textCenter}>
      <div style={formWrap}>
        <h1 style={newBeerHeader}>Add a new beer </h1>

          <form onSubmit={handleNewKegFormSubmission}>
            <input style={input}
              type='text'
              id='name'
              placeholder='Beer Name'
              ref={(input) => {_name = input;}}/>
            <input style={input}
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => {_brand = input;}}/>
            <input style={input}
              id='alcoholContent'
              placeholder='enter value as ABV integer'
              ref={(input) => {_alcoholContent = input;}}/>
          <div  style={submitButtonStyle}>  <button style={buttonSize} type='submit'>Help!</button> </div>
          </form>

        </div>
      </div>



  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
