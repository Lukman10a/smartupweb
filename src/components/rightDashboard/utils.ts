import { Question } from "@/type/quiz";

const base_url = "https://smartup-api.herokuapp.com/api/v2/";
const smartup_institution_id = "715ddce7-48b1-4243-a329-1140195b06b8";
export const user_id = "54486a85-cd9f-400d-ab4f-f097ca905903";

export const fetchData = async () => {
  try {
    const response = await fetch(
      `${base_url}/show_user_info?user_id=${user_id}`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          authorization: "cstbyCEJGczwxwRAomLy",
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export const fetchClassesData = async () => {
  try {
    const response = await fetch(
      `${base_url}/student_classes_index?institution_id=${smartup_institution_id}&user_id=${user_id}`,
      {
        method: "POST",
        headers: {
          // authorization_key: "teqcYUap3VSx5eCwy8cw",
          authorization: "cstbyCEJGczwxwRAomLy",
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export const fetchSubjectData = async () => {
  try {
    const response = await fetch(
      `${base_url}/exam_body_courses?institution_id=${smartup_institution_id}`,
      {
        method: "POST",
        headers: {
          // authorization_key: "teqcYUap3VSx5eCwy8cw",
          authorization: "cstbyCEJGczwxwRAomLy",
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export const fetchTopic = async (course_slug: string) => {
  try {
    const response = await fetch(`${base_url}courses/${course_slug}/topics`, {
      method: "GET",
      headers: {
        // authorization_key: "teqcYUap3VSx5eCwy8cw",
        authorization: "cstbyCEJGczwxwRAomLy",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export const fetchQuizByTopic = async (
  topic_id: string,
): Promise<Question[]> => {
  const response = await fetch(
    `${base_url}topic_questions?topic_id=${topic_id}`,
    {
      method: "POST",
      headers: {
        authorization: "cstbyCEJGczwxwRAomLy",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    console.log(response);
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

// FETCH DATA FOR THE CLASS SIDE BAR

export const fetchClasstData = async () => {
  try {
    const response = await fetch(
      `${base_url}student_classes_index?institution_id=${smartup_institution_id}&user_id=${user_id}`,
      {
        method: "POST",
        headers: {
          // authorization_key: "teqcYUap3VSx5eCwy8cw",
          authorization: "cstbyCEJGczwxwRAomLy",
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      console.log({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// SUBMIT QUIZ FETCH
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

export const SubmitQuizData = async ({
  topic_id,
  course_id,
  institution_id,
  user_id,
  question_and_options,
  score,
}: SubmitQuizDataParams) => {
  try {
    const response = await fetch(`${base_url}tests`, {
      method: "POST",
      headers: {
        authorization: "cstbyCEJGczwxwRAomLy",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        test: {
          topic_id,
          course_id,
          institution_id,
          user_id,
          question_and_options,
          score,
        },
      }),
    });

    if (!response.ok) {
      console.error({ response });
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetch error: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

// Usage example:
// const topic_id = "example_topic_id";
// const course_id = "example_course_id";
// const institution_id = "example_institution_id";
// const user_id = "example_user_id";
// const question_and_options: QuestionAndOption[] = [
//   {
//     question_id: "example_question_id",
//     answer_option_id: "example_answer_option_id",
//     correct_answer_option_id: "example_correct_answer_option_id",
//   },
// ];
// const score = 5;

// SubmitQuizData({ topic_id, course_id, institution_id, user_id, question_and_options, score })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
