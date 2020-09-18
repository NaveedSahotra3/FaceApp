import React, { useEffect, useState } from "react";
import "./attendanceDetail.css";
import { getAllAttendandce } from "../../Redux/Actions/authActions";
import { connect } from "react-redux";
import Sidebar from "../Sidebar/sidebar";
const Attendace = (props) => {
  let { getAllAttendandce, list_attendance } = props;
  let [attendance, setAttend] = useState(false);
  useEffect(() => {
    getAllAttendandce();
  }, []);
  useEffect(() => {
    setAttend(list_attendance);
  }, [list_attendance]);

  console.log(attendance);
  return (
    <div>
      <Sidebar />
      <div className="pl-21">
        <h3 class="display-4">Attendace Detail</h3>

        <div className="tbl">
          <table class="table">
            <thead class="thead-dark">
              <h3 class="display-6">Today</h3>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">Class</th>
                <th scope="col">Roll#</th>
                <th scope="col">Session</th>
                <th scope="col">Time In</th>
                <th scope="col">Time Out</th>
              </tr>
            </thead>
            <tbody>
              {attendance
                ? attendance.map((item, key) => {
                    return (
                      <tr key={key}>
                        <th scope="row">{key + 1}</th>
                        <td>{item.firstname + " " + item.lastname}</td>
                        <td>{item.class}</td>
                        <td>{item.roll_no}</td>
                        <td>{item.session}</td>
                        <td>{item.time_in}</td>
                        <td>{item.time_out}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    list_attendance: state.auth.attendance_list,
  };
};

export default connect(mapStateToProps, { getAllAttendandce })(Attendace);
