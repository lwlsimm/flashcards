import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  topics: {
    '0001': {
      id: '0001',
      name: 'Demo',
      icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg',
      quizIds: []
    }
  }
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const newTopicId = action.payload.id;
      const newTopic = {
        id: newTopicId,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: []  
      }
      state.topics[newTopicId] = newTopic;
    },
    addQuizIds: (state, action) => {
      const quizId = action.payload.id;
      const topicId = action.payload.topicId;
      state.topics[topicId].quizIds.push(quizId);
    }
  },
})

export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizIds} = topicsSlice.actions;

export default topicsSlice.reducer;