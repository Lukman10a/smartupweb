// types/quiz.ts
export interface AnswerOption {
  id: string;
  created_at: string;
  updated_at: string;
  errors: Record<string, any>;
  rank: number | null;
  content: string;
  content_image_url: string | null;
  question_id: string;
  correct: boolean;
}

export interface Question {
  id: string;
  created_at: string;
  updated_at: string;
  errors: Record<string, any>;
  score: string;
  name: string;
  plan_ids: string[];
  plans: string[];
  question_image_url: string | null;
  solution_image_url: string | null;
  solution: string;
  description: string;
  topic_id: string;
  survey_id: string | null;
  study_group_id: string | null;
  institution_id: string | null;
  year_id: string | null;
  answer_options: AnswerOption[];
  question_type: string;
  header: string | null;
  multiple: boolean;
}
