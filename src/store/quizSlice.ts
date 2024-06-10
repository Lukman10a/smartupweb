// store/quizSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "@/type/quiz";

interface QuizState {
  quizData: Question[] | null;
  currentQuestionIndex: number;
}

const initialState: QuizState = {
  quizData: null,
  currentQuestionIndex: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData: (state, action: PayloadAction<Question[]>) => {
      state.quizData = action.payload;
    },
    nextQuestion: (state) => {
      if (
        state.quizData &&
        state.currentQuestionIndex < state.quizData.length - 1
      ) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
  },
});

export const { setQuizData, nextQuestion, previousQuestion } =
  quizSlice.actions;
export default quizSlice.reducer;
