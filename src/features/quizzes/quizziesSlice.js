import { createSlice } from '@reduxjs/toolkit';
import { addQuizIds } from '../topics/topicsSlice'

const initialState = {
  quizzies: {}
}

export const quizziesSlice = createSlice({
  name: 'quizzies',
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const newQuizId = action.payload.id;
      const newQuiz = {
        id: newQuizId,
        name: action.payload.name,
        topicId: action.payload.topicId,
        cardIds: action.payload.cardIds,
      }
      state.quizzies[newQuizId] = newQuiz;
    }
  }
});

export const addQuizAndIds = (quiz) => {
  const { id, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizIds({ quizId: id, topicId: topicId }));
  };
};

export const selectQuizzies = (state) => state.quizzies.quizzies;
export const {addQuiz} = quizziesSlice.actions;

export default quizziesSlice.reducer;