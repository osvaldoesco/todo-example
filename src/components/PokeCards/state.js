export const actionsTypes = {
  clearPokeCards: 'CLEAR_POKE_CARDS',
  setPokeCards: 'SET_POKE_CARDS',
  setInterface: 'SET_INTERFACE',
  setPokeIdForDetail: 'SET_POKE_ID_FOR_DETAIL',
}

const setPokeCardsAction = (pokeCards) =>  ({
  type: actionsTypes.setPokeCards,
  payload: { pokeCards }
});

const clearAction = {
  type: actionsTypes.clearPokeCards,
};

const setInterfaceAction = (pokeInterface) =>  ({
  type: actionsTypes.setInterface,
  payload: { pokeInterface }
});

const setPokeIdForDetailAction = (pokeIdForDetail) =>  ({
  type: actionsTypes.setPokeIdForDetail,
  payload: { pokeIdForDetail }
});

export const actions = { 
  setPokeCardsAction,
  clearAction,
  setInterfaceAction,
  setPokeIdForDetailAction,
}

export const defaultState = { 
  pokeCards: [],
  pokeInterface: false,
  pokeIdForDetail: '',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionsTypes.clearPokeCards: 
      return {...state, pokeCards: []};
    case actionsTypes.setPokeCards:
      const { pokeCards } = action.payload;
      return {...state, pokeCards };
    case actionsTypes.setInterface: 
      const { pokeInterface } = action.payload;
      return {...state, pokeInterface };
    case actionsTypes.setPokeIdForDetail: 
      const { pokeIdForDetail } = action.payload;
      return {...state, pokeIdForDetail };
    default:
      return state;
  }
}