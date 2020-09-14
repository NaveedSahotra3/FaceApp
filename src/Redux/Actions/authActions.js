import axios from "axios";
import { STUDENT_ADDED, STUDENT_ADDED_FAIL,ATTENDANCE_LIST } from "./types";
import baseUrl from "../config";

import { toast } from "react-toastify";
//RegisterUser

export function addUser(data) {
  return (dispatch) => {
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();

    for (var item in data) {
      formData.append(item, data[item]);
    }

    axios
      .post(baseUrl + "/user/add_user", formData, config)
      .then((res) => {
        if (res.data.msg) {
          toast.error(res.data.msg);
          return true;
        }
        console.log(res);
        toast.success("Student Has been Added.");
        dispatch({
          type: STUDENT_ADDED,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Internal Server Error.");
        dispatch({
          type: STUDENT_ADDED_FAIL,
        });
      });
  };
}
export function getAllAttendandce(data) {
  return (dispatch) => {
    console.log(data);

    axios
      .get(baseUrl + "/attendance_mark/get_all_attendance")
      .then((res) => {
        dispatch({
          type: ATTENDANCE_LIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        toast.error("Internal Server Error.");
      });
  };
}
