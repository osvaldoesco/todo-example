import React, { useState, useEffect } from 'react';

import PokeCard from './PokeCard/PokeCard';
import PokeCardDetail from './PokeCardDetail/PokeCardDetail';

const apiSting = 'https://api.pokemontcg.io/v1/cards';

const PokeCards = () =>  {
  const [pokeCards, setPokeCards] = useState([{}]);
  const [pokeInterface, setPokeInterface] = useState(false);
  const [pokeIdForDetail, setPokeIdForDetail] = useState('');
  
  const showDetail = (id) => {
    setPokeInterface(true);
    setPokeIdForDetail(id); 
  }

  const backClick = () => {
    setPokeInterface(false);
  } 

  useEffect(() => {
    fetch(apiSting).then(
      (response) => response.json()
    ).then((response) => {
      setPokeCards(response.cards);
    });
  }, []);

  return(
    <div className='container' style={{marginTop: 100}}>
      <div className='row'>
        { 
          pokeInterface ? <PokeCardDetail id = {pokeIdForDetail} onBackClick = {backClick}/> : 
          pokeCards.map(({id, name, imageUrl, types}) => (
            <PokeCard 
              key = {id} 
              id = {id} 
              title = {name} 
              imageUrl = {imageUrl}
              onGoClick = {showDetail}
              type = {types}
            />  
          ))
        }
      </div>
    </div>
  );
}

export default PokeCards;
