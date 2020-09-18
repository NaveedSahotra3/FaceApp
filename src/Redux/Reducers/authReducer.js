import {
  STUDENT_ADDED,
  ATTENDANCE_LIST,
  ADMIN_ADDED,
  ADMIN_LOGGEDIN,
} from "../Actions/types";
import Cookie from "js-cookie";
import history from '../../history'
const initialState = {
  user: null,
  attendance_list: false,
  userDetail: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STUDENT_ADDED: {
      return {
        ...state,
        users: action.payload.user,
      };
    }
    case ATTENDANCE_LIST: {
      return {
        ...state,
        attendance_list: action.payload,
      };
    }
    case ADMIN_LOGGEDIN: {
      Cookie.set("user", action.payload);
      setTimeout(() => {
        history.push("/Home")
      },1000);
      return {
        ...state,
        userDetail: action.payload,
      };
    }
    case ADMIN_ADDED: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
