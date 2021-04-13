import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cards:{}
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers:{
    addCard: (state, action) => {
      const newCardId = action.payload.id;
      const newCard = {
        id: newCardId,
        front: action.payload.front,
        back: action.payload.back
      }
      state.cards[newCardId] = newCard;
    },
  }
})

export const selectCards = (state) => state.cards.cards;
export const {addCard} = cardsSlice.actions;

export default cardsSlice.reducer;