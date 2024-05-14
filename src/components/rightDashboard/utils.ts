const base_url = "https://smartup-api.herokuapp.com/api/v2";
const smartup_institution_id = "715ddce7-48b1-4243-a329-1140195b06b8";
const user_id = "3d99c36c-3775-49b6-9fd2-4c789bcf0980";

export const fetchData = async () => {
  try {
    const response = await fetch(
      `${base_url}/show_user_info?user_id=${user_id}`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          authorization_key: "teqcYUap3VSx5eCwy8cw",
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
          authorization_key: "teqcYUap3VSx5eCwy8cw",
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