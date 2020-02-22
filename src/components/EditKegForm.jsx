import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export default function EditKegForm(props){

  let _name = null;
  let _brand = null;
  let _alcoholContent = null;
  let _price = null;
  let _kegVolume = props.editKegId;
  let _id = props.editKegVol;

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


//pass id and current keg volume down as props
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: _name.value, price: _price.value, brand: _brand.value, alcoholContent: _alcoholContent.value, id: props.id, kegVolume: props.kegVolume});
    _name.value = '';
    _brand.value = '';
    _alcoholContent.value = '';
    _price.value = '';
  }

  return(

    <div style={textCenter}>
      <div style={formWrap}>
        <h1 style={newBeerHeader}>Edit the Keg </h1>

        <form onSubmit={handleEditKegFormSubmission}>
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
            type='number'
            id='price'
            placeholder='Price per Pint'
            ref={(input) => {_price = input;}}/>
          <input style={input}
            id='alcoholContent'
            type='number'
            placeholder='enter value as ABV integer'
            ref={(input) => {_alcoholContent = input;}}/>
          <div  style={submitButtonStyle}>  <button style={buttonSize} type='submit'>Edit Keg</button> </div>
        </form>

      </div>
    </div>



  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};
