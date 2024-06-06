// const base_url = "https://smartup-api.herokuapp.com/api/v2/";
// const base_url = "https://smartup-api.herokuapp.com/api/v2/session?email=info_stu@smartuptech.com&password=1234567890";
const base_url = "https://smartup-api.herokuapp.com/api/v2/";
const smartup_institution_id = "715ddce7-48b1-4243-a329-1140195b06b8";
const user_id = "54486a85-cd9f-400d-ab4f-f097ca905903";

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
      }
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
      }
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
      }
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
