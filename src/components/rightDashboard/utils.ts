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

export const fetchSyllabusData = async () => {
  try {
    const response = await fetch(
      `${base_url}class_syllable_info?study_group_id=a260380e-a6b1-4916-b01b-043a2ae57350`,
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

export const fetchStudentTests = async () => {
  const response = await fetch(
    `${base_url}student_all_tests_taken?user_id=${user_id}`,
    {
      method: "POST",
      headers: {
        authorization: "cstbyCEJGczwxwRAomLy",
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
        authorization: "cstbyCEJGczwxwRAomLy",
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

// [
//   {
//     id: "1a096592-c0d9-47a3-b824-ead8481714d6",
//     created_at: "2024-07-01T15:38:04.643Z",
//     updated_at: "2024-07-01T15:38:04.643Z",
//     errors: {},
//     name: "Depreciation-yc-tgp",
//     user: {
//       id: "54486a85-cd9f-400d-ab4f-f097ca905903",
//       email: "info_stu@smartuptech.com",
//       authentication_token: "cstbyCEJGczwxwRAomLy",
//       string: null,
//       status: "student",
//       admin: false,
//       created_at: "2020-01-20T17:10:47.306Z",
//       updated_at: "2024-05-28T16:13:25.925Z",
//       first_name: "Sule",
//       surname: "Sule",
//       address: null,
//       phone: "1234567890",
//       image: {
//         url: "https://smartuptech-prod.s3.amazonaws.com/uploads/student_educator/image/54486a85-cd9f-400d-ab4f-f097ca905903/photo.jpg",
//         thumb: {
//           url: "https://smartuptech-prod.s3.amazonaws.com/uploads/student_educator/image/54486a85-cd9f-400d-ab4f-f097ca905903/thumb_photo.jpg",
//         },
//       },
//       state: {
//         id: "291a24b5-6794-4599-a2c8-06c47e28c47a",
//         name: "Federal Capital Territory",
//         state_code: "FCT",
//         created_at: "2020-01-15T08:57:10.848Z",
//         updated_at: "2020-01-15T08:57:10.848Z",
//       },
//       completed_at: null,
//       sex: "male",
//       date_of_birth: null,
//       level: "SS2",
//       username: "info_stu",
//       guardian_one: "Mr. Suleman",
//       guardian_two: "Mrs. Suleman",
//       qualification: "",
//       cv: {
//         url: null,
//       },
//       state_id: "291a24b5-6794-4599-a2c8-06c47e28c47a",
//       lga_id: "03eb6d67-85e8-4248-8d93-51af97118694",
//       sid: "FCT/ABM-4020404733",
//       base_level_id: "39456d4d-2be6-472c-9a78-9e07bed3c189",
//       sub_base_level_id: "6187e16a-e3e0-4001-8a8b-0585d9a28629",
//       category: null,
//       cleared: false,
//       jamb_year_id: null,
//       reg_no: null,
//       utme_subjects: [],
//       student_id: null,
//     },
//     institution_id: "715ddce7-48b1-4243-a329-1140195b06b8",
//     topic_name: "Depreciation",
//     course_name: "Commerce",
//   },
// ];

// [
//   {
//     "id": "4900663d-d9b0-40b3-a839-6389c33e9054",
//     "created_at": "2024-07-01T13:59:49.528Z",
//     "updated_at": "2024-07-01T13:59:49.528Z",
//     "errors": {},
//     "user_id": "54486a85-cd9f-400d-ab4f-f097ca905903",
//     "test": {
//       "id": "3d1a5b1b-46a7-4de2-b249-e6e386810393",
//       "course_id": "74db1ee4-efa4-4582-8e46-728537b2f042",
//       "user_id": "54486a85-cd9f-400d-ab4f-f097ca905903",
//       "topic_id": "ba30722b-17aa-48f7-8568-e527f21bc612",
//       "institution_id": "715ddce7-48b1-4243-a329-1140195b06b8",
//       "name": "Depreciation-9x-yyw",
//       "question_ids": [
//         "6b006f4e-e47e-4699-a45f-4f2b8de9ebed",
//         "1a24fe20-5b3a-43dc-a803-e1e3df92b9ce",
//         "00b4e69b-43dc-439c-9f54-cbf14c6da17c",
//         "47232e2b-4f33-4242-b7fd-a37bb686d053"
//       ],
//       "created_at": "2024-07-01T13:59:49.351Z",
//       "updated_at": "2024-07-01T13:59:49.351Z"
//     },
//     "score": "8.0",
//     "answers": [
//       {
//         "id": "9ba91e6a-8d77-4589-9c05-20f71177f6ac",
//         "created_at": "2024-07-01T13:59:49.339Z",
//         "updated_at": "2024-07-01T13:59:49.517Z",
//         "errors": {},
//         "state": "submitted",
//         "student_answer": null,
//         "student_answer_image_url": null,
//         "content": "Depreciation",
//         "content_url": "",
//         "question": {
//           "id": "2f7761cb-a853-4314-ab14-acf428690e45",
//           "created_at": "2021-03-01T13:56:35.861Z",
//           "updated_at": "2021-03-01T13:56:35.861Z",
//           "errors": {},
//           "score": "0.0",
//           "name": "Question-7",
//           "plan_ids": [],
//           "plans": [],
//           "question_image_url": null,
//           "solution_image_url": null,
//           "solution": null,
//           "description": "The allocation of the cost of a tangible asset to expenses in the periods in which services are received from the asset is called …………",
//           "topic_id": "ba30722b-17aa-48f7-8568-e527f21bc612",
//           "survey_id": null,
//           "study_group_id": null,
//           "institution_id": null,
//           "year_id": "dbec764d-5cc3-49dc-980b-94d9054a7dbe",
//           "answer_options": [
//             {
//               "id": "50e4e86f-2f80-4efc-b865-725ac8a514b8",
//               "created_at": "2021-03-01T13:56:35.956Z",
//               "updated_at": "2021-03-01T13:56:35.956Z",
//               "errors": {},
//               "rank": null,
//               "content": "Liability",
//               "content_image_url": null,
//               "question_id": "2f7761cb-a853-4314-ab14-acf428690e45",
//               "correct": false
//             },
//             {
//               "id": "b7a03197-7731-4276-a51f-214d98842fb1",
//               "created_at": "2021-03-01T13:56:35.927Z",
//               "updated_at": "2021-03-01T13:56:35.927Z",
//               "errors": {},
//               "rank": null,
//               "content": "Objective",
//               "content_image_url": null,
//               "question_id": "2f7761cb-a853-4314-ab14-acf428690e45",
//               "correct": false
//             }
//           ],
//           "question_type": "choice",
//           "header": null,
//           "multiple": false
//         }
//       }
//     ]
//   }
// ]
