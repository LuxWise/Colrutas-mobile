import ApiManager from "./ApiManager";

export const user_login = data => {
  try {
    const result = ApiManager("/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (err) {
    return err.response.data;
  }
};
