import { STUDENT_ADDED_FAIL, CLEAR_ERRORS } from "../Actions/types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STUDENT_ADDED_FAIL:
      return {
        msg: "Internal server error.",
      };

    default:
      return state;
  }
}
