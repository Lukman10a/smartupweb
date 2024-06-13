// src/store/selectors.ts
import { createSelector } from 'reselect';
import { RootState } from '@/store'; // adjust this import based on your store setup

export const quizDataSelector = (state: RootState) => state.quiz.quizData;
export const selectedAnswersSelector = (state: RootState) => state.quiz.selectedAnswers;

export const selectTotalScore = createSelector(
  [quizDataSelector, selectedAnswersSelector],
  (quizData, selectedAnswers) => {
    const totalQuestions = quizData ? quizData.length : 0;
    const correctAnswers = selectedAnswers.filter(answer => answer.isCorrect).length;
    
    const scorePercentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

    return {
      totalQuestions,
      correctAnswers,
      scorePercentage,
    };
  }
);
