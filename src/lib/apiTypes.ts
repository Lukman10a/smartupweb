export interface Institution {
  id: string;
  created_at: string;
  updated_at: string;
  errors: Record<string, unknown>;
  slug: string;
  name: string;
  institution_type: string;
  exam_body: boolean;
  logo_url: string;
  email: string;
}

export interface BaseLevel {
  id: string;
  name: string;
  header_id: string;
  trailer_id: string;
  created_at: string;
  updated_at: string;
}

export interface State {
  id: string;
  name: string;
  state_code: string;
  created_at: string;
  updated_at: string;
}

export interface LGA {
  id: string;
  state_id: string;
  name: string;
  lga_code: string;
  created_at: string;
  updated_at: string;
}

export interface InstitutionAffiliated {
  id: string;
  name: string;
  motto: string;
  logo: {
    url: string;
    thumb: {
      url: string;
    };
  };
  email: string;
  phone: string;
  slug: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  exam_body: boolean;
  address: string;
  institution_type: string;
}

export interface User {
  id: string;
  created_at: string;
  updated_at: string;
  errors: Record<string, unknown>;
  email: string;
  status: string;
  authentication_token: string;
  cv_url: string | null;
  base_level: BaseLevel;
  first_name: string;
  surname: string;
  address: string | null;
  phone: string;
  state: State;
  lga: LGA;
  image_url: string;
  full_name: string;
  display_name: string;
  admin: boolean;
  current_term: string;
  sex: string;
  level: string;
  age: number | null;
  user_access_token: string;
  date_of_birth: string | null;
  completed_at: string | null;
  total_score: string;
  average_score: number;
  best_score: string;
  tests_taken: number;
  videos_watched: number;
  qualification: string;
  guardian_one: string;
  guardian_two: string;
  username: string;
  institutions_affiliated: InstitutionAffiliated[];
}

export interface UserResponse {
  institutions: Institution[];
  user: User;
  institution?: Institution;
  status: string | null;
}

// Submit quiz data
interface QuestionAndOption {
  question_id: string;
  answer_option_id: string;
  correct_answer_option_id: string;
}

export interface SubmitQuizDataParams {
  topic_id: string;
  course_id: string;
  institution_id: string;
  user_id: string;
  question_and_options: QuestionAndOption[];
  score: number;
}

// Lesson Video Types

export type Logo = {
  url: string | null;
  thumb: {
    url: string | null;
  };
};

export type LessonVideoInstitution = {
  id: string;
  name: string;
  motto: string;
  logo: Logo;
  email: string;
  phone: string;
  slug: string;
  owner_id: string;
  created_at: string;
  updated_at: string;
  exam_body: boolean;
  address: string;
  institution_type: string;
};

export type Image = {
  url: string | null;
  thumb: {
    url: string | null;
  };
};

export type Creator = {
  id: string;
  email: string;
  authentication_token: string;
  string: string | null;
  status: string;
  admin: boolean;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  surname: string | null;
  address: string | null;
  phone: string | null;
  image: Image;
  state: string | null;
  completed_at: string | null;
  sex: string | null;
  date_of_birth: string | null;
  level: string;
  username: string;
  guardian_one: string;
  guardian_two: string;
  qualification: string;
  cv: {
    url: string | null;
  };
  state_id: string | null;
  lga_id: string | null;
  sid: string;
  base_level_id: string | null;
  sub_base_level_id: string | null;
  category: string | null;
  cleared: boolean;
  jamb_year_id: string | null;
  reg_no: string | null;
  utme_subjects: string[];
  student_id: string | null;
};

export type Topic = {
  id: string;
  name: string;
  course_id: string;
  rank: string | null;
  active: boolean;
  description: string;
  created_at: string;
  updated_at: string;
  lecture_type: string;
  video_url: string;
  topic_image: Image;
  level: string | null;
  questions_count: number;
  videos_count: number;
  plan_ids: string[];
};

export type Course = {
  id: string;
  created_at: string;
  updated_at: string;
  errors: Record<string, unknown>;
  slug: string;
  questions_count: number;
  plan_ids: string[];
  plans: string[];
  videos_count: number;
  name: string;
  category: string;
  rank: string;
  course_image_url: string | null;
  description: string;
  institution: LessonVideoInstitution;
  active: boolean;
  creator: Creator;
  topics: Topic[];
  years: string[];
};
