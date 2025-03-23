import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: {}, // Stores selected answers { questionId: answer }
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    reorderAnswer: (state, action) => {
      const { questionId, newOrder } = action.payload;
      state.answers[questionId] = newOrder;
    },
    resetAnswers: (state) => {
      state.answers = {}; // Reset all answers
    },
  },
});

export const { selectAnswer, reorderAnswer, resetAnswers } =
  questionSlice.actions;
export default questionSlice.reducer;
