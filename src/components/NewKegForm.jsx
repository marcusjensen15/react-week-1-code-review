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
  _names.value = '';
  _location.value = '';
  _issue.value = '';
    }

  return(

    <div style={textCenter}>
      <div style={formWrap}>
        <h1 style={newBeerHeader}>Add a new beer </h1>
        <form>
//experimenting
          <form onSubmit={handleNewKegFormSubmission}>
            <input
              type='text'
              id='name'
              placeholder='Beer Name'
              ref={(input) => {_name = input;}}/>
            <input
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => {_brand = input;}}/>
            <textarea
              id='alcoholContent'
              placeholder='enter value as ABV integer'
              ref={(input) => {_alcoholContent = textarea;}}/>
            <button type='submit'>Help!</button>
          </form>

  //experimenting



          <ul style={listStyle}>
            <li style={inputPadding}>
              <label>
                Name of Beer
                <br></br>
                <input style={input} type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Brand
                <br></br>
                <input style={input} type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Price per Pint
                <br></br>
                <input style={input} type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Alcohol Content
                <br></br>
                <input style={input} type="text" name="name" />
              </label>
            </li>
            <li style={inputPadding}>
              <label>
                Keg Volume
                <br></br>
                <input style={input} type="number" name="name" />
              </label>
            </li>
            <div  style={submitButtonStyle}><li><input style={buttonSize}type="submit" value="Submit" /></li> </div>

          </ul>
        </form>

      </div>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
