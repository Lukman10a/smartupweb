export interface Test {
  topic_name: string;
  topic: string;
  id: string;
  course_id: string;
  user_id: string;
  topic_id: string;
  institution_id: string;
  name: string;
  question_ids: string[];
  created_at: string;
  updated_at: string;
}

export interface TestResult {
  topic: string;
  id: string;
  created_at: string;
  updated_at: string;
  errors: object;
  user_id: string;
  test: Test;
  score: string;
  grade: string;
}
