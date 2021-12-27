export const handleUserName = (value) => {
  console.log(value, "devesh");
  return (dispatch) => {
    dispatch({ type: "USER_NAME", payload: value });
  };
};

export const handleUserPassword = (value) => {
  console.log(value, "password");
  return (dispatch) => {
    dispatch({ type: "USER_PASSWORD", payload: value });
  };
};
export const handleUserEmail = (value) => {
  console.log(value, "email");
  return (dispatch) => {
    dispatch({ type: "USER_EMAIL", payload: value });
  };
};

export const handleUserPhone = (value) => {
  console.log(value, "phone");
  return (dispatch) => {
    dispatch({ type: "USER_PHONE", payload: value });
  };
};

export const handleFormSubmit = (userName, password, email, Phone) => {
  console.log(userName, password, email, Phone, "action");
  let userData = [userName, password, email, Phone];
  console.log(userData, "userdata");
  return (dispatch) => {
    dispatch({ type: "FORM_SUBMIT", payload: userData });
  };
};
