import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice/questionSlice";

export const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

export default store;
