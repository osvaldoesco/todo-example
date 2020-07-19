import React, { useState, useEffect } from 'react';

const apiSting = 'https://api.pokemontcg.io/v1/cards';

const PokeCards = () =>  {
  const [pokeCards, setPokeCards] = useState([]);

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
          pokeCards.map(({id, name, imageUrl}) => (
            <div className='col-md-3' key={id}>
              <img 
                alt={name}
                style={{width: '100%', maxWidth: '100%'}}
                src={imageUrl}
              />
              <label>{name}</label>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PokeCards;
