const INITIAL_STATE = {
  userName: "",
  password: "",
  email: "",
  phone: "",
  userList: [],
};

export default function RegisterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    case "USER_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "USER_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "USER_PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "FORM_SUBMIT":
      return {
        ...state,
        userList: [...action.payload],
      };
    default:
      return state;
  }
}
