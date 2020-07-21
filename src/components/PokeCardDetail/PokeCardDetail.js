import React, { useState, useEffect } from 'react';

import './PokeCardDetail.css';

const PokeCardDetail = ({id, onBackClick}) => {

  //Al momento de asignarle el valor inicial al estado debemos de colocarle como valor
  //lo que se le asignara en un futuro
  const [pokeCards, setPokeCards] = useState({});

  const apiSting = `https://api.pokemontcg.io/v1/cards/${id} `;
  const {name, imageUrl, types, attacks, weaknesses} = pokeCards;

  useEffect(() => {
    fetch(apiSting).then(
      (response) => response.json()
    ).then((response) => {
      setPokeCards(response.card);
    });
  }, []);
  const attacksMarkUp = () =>{
    //Con los && validamos que la prop exita para que no de error el mapeo
    return attacks && attacks.map(({name, text}) => (
      <div>{`${name}: ${text} `}</div>
    )) 
  }  

  const weaknessesMarkUp = () => {
    return weaknesses && weaknesses.map(({type}) => (
      <div>{type}</div>
    ))
  }

  return(
      <>
        <div>
          <img 
            alt={name}
            style={{width: '165%', maxWidth: '165%'}}
            src={imageUrl}
          />  
        </div>
        <div className='detail-Poke-info-Container'>
        <table className='info-table-poke-detail'>
          <tbody>
            <tr>
              <td className='title-poke-cell'>Name</td> 
              <td className='info-poke-cell'>{name}</td> 
            </tr> 
            <tr>
              <td className='title-poke-cell'>Types</td> 
              <td className='info-poke-cell'>{types}</td> 
            </tr> 
            <tr>
              <td className='title-poke-cell-attacks'>Attacks</td>  
              <td className='info-poke-cell-attacks'>{attacksMarkUp()}</td>  
            </tr> 
            <tr>
              <td className='title-poke-cell'>Weaknesses</td> 
              <td className='info-poke-cell'>{weaknessesMarkUp()}</td> 
            </tr> 
          </tbody>
        </table>
        <button
          className='btn btn-danger'
          onClick={() => {onBackClick()}}
        >
          Go back
        </button>
        </div>
      </>
  )
}

export default PokeCardDetail;