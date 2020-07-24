import React, { useReducer, useEffect } from 'react';

import PokeCard from '../PokeCard/PokeCard';
import PokeCardDetail from '../PokeCardDetail/PokeCardDetail';
import { actions, defaultState, reducer } from './state'

const apiSting = 'https://api.pokemontcg.io/v1/cards';

const PokeCards = () =>  {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const showDetail = (id) => {
    dispatch(actions.setInterfaceAction(true));
    dispatch(actions.setPokeIdForDetailAction(id));
  }

  const backClick = () => {
    dispatch(actions.setInterfaceAction(false));
  } 

  useEffect(() => {
    const fetchData = async () =>  {
      const response = await fetch(apiSting);
      const data = await response.json();
      dispatch(actions.setPokeCardsAction(data.cards));
    }
    fetchData();
  }, []);

  return(
    <div className='container' style={{marginTop: 100}}>
      <button 
        className='btn btn-primary' 
        onClick={() => {
          dispatch(actions.clearAction)
        }}
      >
        Clear
      </button>
      <div className='row'>
        { 
          state.pokeInterface ? <PokeCardDetail id = {state.pokeIdForDetail} onBackClick = {backClick}/> : 
          state.pokeCards && state.pokeCards.map(({id, name, imageUrl, types}) => (
            <PokeCard 
              key = {id} 
              id={id} 
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