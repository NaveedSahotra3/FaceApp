import { STUDENT_ADDED, ATTENDANCE_LIST } from "../Actions/types";

const initialState = {
  user: null,
  attendance_list: false,
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

    default:
      return state;
  }
}
