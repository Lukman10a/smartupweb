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
          authorization: "peTVUyiW25y3PzUVd1hz",
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
          authorization: "peTVUyiW25y3PzUVd1hz",
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
          authorization: "peTVUyiW25y3PzUVd1hz",
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
        authorization: "peTVUyiW25y3PzUVd1hz",
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
        authorization: "peTVUyiW25y3PzUVd1hz",
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
          authorization: "peTVUyiW25y3PzUVd1hz",
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
        authorization: "peTVUyiW25y3PzUVd1hz",
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

export const fetchSyllabusData = async () => {
  try {
    const response = await fetch(
      `${base_url}class_syllable_info?study_group_id=a260380e-a6b1-4916-b01b-043a2ae57350`,
      {
        method: "POST",
        headers: {
          // authorization_key: "teqcYUap3VSx5eCwy8cw",
          authorization: "peTVUyiW25y3PzUVd1hz",
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

export const fetchStudentTests = async () => {
  const response = await fetch(
    `${base_url}student_all_tests_taken?user_id=${user_id}`,
    {
      method: "POST",
      headers: {
        authorization: "peTVUyiW25y3PzUVd1hz",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export const fetchTestResult = async (test_id: string) => {
  const response = await fetch(
    `${base_url}get_test_result?test_id=${test_id}`,
    {
      method: "POST",
      headers: {
        authorization: "peTVUyiW25y3PzUVd1hz",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

// export const fetchLoginData = async () => {
//   try {
//     const response = await fetch(
//       `${base_url}/session?email=info_stu@smartuptech.com&password=1234567890`,
//       {
//         method: "POST", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           authorization: "peTVUyiW25y3PzUVd1hz",
//           "Content-Type": "application/json",
//         },
//       },
//     );

//     if (!response.ok) {
//       console.log({ response });
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log({ data });
//     return data;
//   } catch (error: any) {
//     throw new Error(`Fetch error: ${error.message}`);
//   }
// };
