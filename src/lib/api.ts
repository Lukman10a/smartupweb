import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Question } from "@/type/quiz";
import { TestResult } from "@/type/testResult";
import { setCookie, getCookie, hasCookie } from "cookies-next";
import { SubmitQuizDataParams, UserResponse } from "@/lib/apiTypes";
import { queueRequest } from "./apiManagement";

// Retrieve user authentication info from cookies
let authUser: { status: string; token: string } | undefined;

const base_url = "https://smartup-api.herokuapp.com/api/v2/";
const base_url3 = "https://smartup-api.herokuapp.com/api/v3/";
const smartup_institution_id = "715ddce7-48b1-4243-a329-1140195b06b8";
export const user_id = "54486a85-cd9f-400d-ab4f-f097ca905903";

// Create an Axios instance with default config
const axiosInstance = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: authUser ? authUser.token : "",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the authorization token from the cookie
axiosInstance.interceptors.request.use(
  (config) => {
    // let authUser: { status: string; token: string } | undefined;

    if (hasCookie("userAuth")) {
      authUser = JSON.parse(getCookie("userAuth") as string);
    } else {
      authUser = undefined;
    }
    console.log({ authUser });
    if (authUser && authUser.token) {
      config.headers["Authorization"] = authUser.token;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

// Login function
export const login = async (
  email: string,
  password: string,
): Promise<UserResponse> => {
  try {
    const response = await axiosInstance.post<UserResponse>("session", null, {
      params: { email, password },
    });

    const data = response.data;
    console.log({ data });

    const stu_or_ed: boolean = data.institutions ? true : false;

    if (
      data?.user?.authentication_token &&
      (data?.institutions || data?.institution)
    ) {
      // Store the authentication token and user status in cookies
      setCookie(
        "userAuth",
        JSON.stringify({
          token: data.user.authentication_token,
          status: data.user.status,
          user_id: data.user.id,
          // institution_id: data.institutions[0].id || data?.institution?.id,
          institution_id: stu_or_ed
            ? data.institutions[0].id
            : data?.institution?.id,
        }),
        {
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        },
      );

      return data;
    } else if (data?.status && data?.status === "guardian") {
      console.log("Checking", { data });
      setCookie(
        "userAuth",
        JSON.stringify({
          token: data.user.authentication_token,
          status: data.status,
          user_id: data.user.id,
          institution_id: null,
        }),
        {
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        },
      );

      return data;
    } else {
      throw new Error("No authentication token returned");
    }
  } catch (error: any) {
    console.error("Login failed:", error.message);
    throw new Error(`Login failed: ${error.message}`);
  }
};

// Fetch user data
export const fetchData = async () => {
  try {
    const response = await axiosInstance.post("show_user_info", {
      user_id,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch classes data
export const fetchClassesData = async () => {
  try {
    const response = await axiosInstance.post("student_classes_index", {
      institution_id: smartup_institution_id,
      user_id,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch subject data
export const fetchSubjectData = async () => {
  try {
    const response = await axiosInstance.post("exam_body_courses", {
      institution_id: smartup_institution_id,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch topic data by course slug
export const fetchTopic = async (course_slug: string) => {
  try {
    const response = await axiosInstance.get(`courses/${course_slug}/topics`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch quiz questions by topic
export const fetchQuizByTopic = async (
  topic_id: string,
): Promise<Question[]> => {
  try {
    const response = await axiosInstance.post("topic_questions", {
      topic_id,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch class sidebar data
export const fetchClasstData = async () => {
  try {
    const response = await axiosInstance.post("student_classes_index", {
      institution_id: smartup_institution_id,
      user_id,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

export const SubmitQuizData = async (params: SubmitQuizDataParams) => {
  try {
    const response = await axiosInstance.post("tests", {
      test: params,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch syllabus data
export const fetchSyllabusData = async () => {
  try {
    const response = await axiosInstance.post("class_syllable_info", {
      study_group_id: "a260380e-a6b1-4916-b01b-043a2ae57350",
    });
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};

// Fetch student tests
export const fetchStudentTests = async () => {
  try {
    const response = await queueRequest(
      `${base_url}student_all_tests_taken?user_id=${user_id}`,
      {
        method: "POST",
        headers: {
          Authorization: authUser ? authUser.token : "",
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Error fetching student tests:", error.message);
      // Optionally, return a default value or rethrow the error after logging
      return [];
    } else {
      throw error; // Rethrow if the error is not an instance of AxiosError
    }
  }
};

// Fetch test result
export const fetchTestResult = async (test_id: string) => {
  try {
    const response = await queueRequest(
      `${base_url}get_test_result?test_id=${test_id}`,
      {
        method: "POST",
        headers: {
          Authorization: authUser ? authUser.token : "",
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Fetch error: ${error.message}`);
  }
};
