import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice';
import quizziesReducer from '../features/quizzes/quizziesSlice';
import cardsReducer from '../features/cards/cardSlice'

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzies: quizziesReducer,
    cards: cardsReducer,
  },
});
