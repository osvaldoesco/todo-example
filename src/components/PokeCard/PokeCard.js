import React from 'react';
import './PokeCard.css';

const PokeCards = ({id, title, imageUrl, onGoClick, type}) => {

  return(
    <div className='col-md-3' key={id}>
      
      <img 
        alt={title}
        style={{width: '100%', maxWidth: '100%'}}
        src={imageUrl}
      />
     <h5 className='title'>{title}</h5>
     <h5 className='title'>Type: <label>{type}</label></h5>
      
      <button 
        className='btn btn-danger'
        onClick = {() => {onGoClick(id)}}  
      >  
        Go!
      </button>
    </div>
  )
}

export default PokeCards;
