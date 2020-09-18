import React, { useEffect, useState } from "react";
import Axios from "axios";
// import FormData from 'form-data'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FileUpload from "./newForm";
import "./newStudentForm.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect } from "react-redux";
import { addUser } from "../../Redux/Actions/authActions";
import Sidebar from "../Sidebar/sidebar";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  lastName: {
    marginLeft: 20,
  },
  firstName: {
    width: "200px !important",
  },
}));
const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two", className: "myOptionClassName" },
  {
    type: "group",
    name: "group1",
    items: [
      { value: "three", label: "Three", className: "myOptionClassName" },
      { value: "four", label: "Four" },
    ],
  },
  {
    type: "group",
    name: "group2",
    items: [
      { value: "five", label: "Five" },
      { value: "six", label: "Six" },
    ],
  },
];
const NewStudentForm = (props) => {
  let { addUser } = props;
  const classes = useStyles();
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    roll_no: "",
    gender: "",
    d_o_b: "",
    img: "",
    session: "",
    class: "",
  });
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "img") {
      let img = e.target.files[0];
      setState({
        ...state,
        [name]: img,
      });
      let imgURL = URL.createObjectURL(img);
      document.getElementById("userIMG").src = imgURL;
      return true;
    }
    setState({
      ...state,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    addUser(state);
  };

  return (
    <>
      <Sidebar />
      <div className="container mt-4 pl-17">
        <h4 className="display-4 text center mb-4">New Student Form</h4>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <form>
              {/* <FileUpload /> */}
              <h6>Basic Information</h6>
              <p className="label_txt">First Name</p>
              <input
                type="text"
                className="input_fields"
                onChange={onChangeHandler}
                name="firstname"
                placeholder="First Name"
              />
              <p className="label_txt">Last Name</p>
              <input
                type="text"
                className="input_fields"
                onChange={onChangeHandler}
                name="lastname"
                placeholder="Last Name"
              />
              <p className="label_txt">Email</p>
              <input
                type="text"
                className="input_fields"
                onChange={onChangeHandler}
                name="email"
                placeholder="Email"
              />
              <p className="label_txt">Date of Birth</p>

              <input
                type="date"
                className="input_fields"
                onChange={onChangeHandler}
                name="d_o_b"
              />
              <p className="label_txt">Select Class</p>
              {/* <Dropdown
              options={options}
              style={{ paddingTop: "30px", marginBottom: 10 }}
              name="class"
              placeholder="Select Class"
              arrowClosed={<span className="arrow-closed" />}
              arrowOpen={<span className="arrow-open" />}
              onChange={onChangeHandler}
            /> */}
              <select
                name="class"
                id=""
                className="input_fields"
                onChange={onChangeHandler}
              >
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </select>
              <p className="label_txt">Roll No.</p>
              <input
                type="number"
                className="input_fields"
                onChange={onChangeHandler}
                name="roll_no"
              />
              <p className="label_txt">Session</p>
              <input
                type="text"
                className="input_fields"
                onChange={onChangeHandler}
                name="session"
              />
              <p className="label_txt">Gender</p>
              <input
                type="radio"
                name="gender"
                className=""
                id="male"
                onChange={onChangeHandler}
                value="male"
              />
              <label htmlFor="male" className="gender">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                className=""
                value="female"
                id="female"
                onChange={onChangeHandler}
              />
              <label htmlFor="female" className="gender">
                Female
              </label>
              <input
                type="submit"
                value="upload"
                className="btn btn-primary btn-block mt-4 mb-10"
                onClick={submit}
              />
            </form>
          </div>
          <div className="col-md-6 col-sm-12">
            <img
              src="https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg"
              alt=""
              height="200"
              width="200"
              className="mt-5 ml-1"
              id="userIMG"
            />
            <div className="custom-file mt-5">
              <input
                type="file"
                className="custom-file-inpt "
                id="customFile "
                name="img"
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { addUser })(NewStudentForm);
