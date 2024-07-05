// store/quizSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "@/type/quiz";

export interface SelectedAnswer {
  questionId: string;
  answerId: string;
  chosenAnswer: string;
  chosenQuestion: string;
  isCorrect: boolean;
  questionName: string;
}

interface QuizState {
  quizData: Question[] | null;
  currentQuestionIndex: number;
  selectedAnswers: SelectedAnswer[];
  topicNames: { name: string; id: string }[]; // Add this line to store topic names
}

const initialState: QuizState = {
  quizData: null,
  currentQuestionIndex: 0,
  selectedAnswers: [],
  topicNames: [], // Add this line to initialize topic names
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuizData: (state, action: PayloadAction<Question[]>) => {
      state.quizData = action.payload;
      state.currentQuestionIndex = 0;
      state.selectedAnswers = [];
    },
    setTopicNames: (
      state,
      action: PayloadAction<{ name: string; id: string }[]>,
    ) => {
      state.topicNames = action.payload; // Add this line to set topic names
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
    selectAnswer: (
      state,
      action: PayloadAction<{
        questionId: string;
        answerId: string;
        isCorrect: boolean;
        chosenAnswer: string;
        chosenQuestion: string;
        questionName: string;
      }>,
    ) => {
      const {
        questionId,
        answerId,
        isCorrect,
        chosenAnswer,
        chosenQuestion,
        questionName,
      } = action.payload;
      const existingAnswerIndex = state.selectedAnswers.findIndex(
        (answer) => answer.questionId === questionId,
      );

      if (existingAnswerIndex >= 0) {
        state.selectedAnswers[existingAnswerIndex] = {
          questionId,
          answerId,
          isCorrect,
          chosenAnswer,
          chosenQuestion,
          questionName,
        };
      } else {
        state.selectedAnswers.push({
          questionId,
          answerId,
          isCorrect,
          chosenAnswer,
          chosenQuestion,
          questionName,
        });
      }
    },
    updateAnswer: (
      state,
      action: PayloadAction<{
        questionId: string;
        answerId: string;
        isCorrect: boolean;
        chosenAnswer: string;
      }>,
    ) => {
      const { questionId, answerId, isCorrect, chosenAnswer } = action.payload;
      const existingAnswerIndex = state.selectedAnswers.findIndex(
        (answer) => answer.questionId === questionId,
      );

      if (existingAnswerIndex >= 0) {
        state.selectedAnswers[existingAnswerIndex] = {
          ...state.selectedAnswers[existingAnswerIndex],
          answerId,
          isCorrect,
          chosenAnswer,
        };
      }
    },
  },
});

export const {
  setQuizData,
  setTopicNames, // Export the new action
  nextQuestion,
  previousQuestion,
  selectAnswer,
  updateAnswer,
} = quizSlice.actions;
export default quizSlice.reducer;
