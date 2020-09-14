import React, { Fragment, useState } from "react";
// var  React , {Fragment, useState}  = require('react');
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Validator from "input-field-validator";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// import { TextField } from '@material-ui/core';
import { Button, Checkbox, Form } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const FileUpload = () => {
  const classes = useStyles();
  const [file, setFile] = useState("");
  const [state, setState] = useState({
    name: null,
    roll_number: null,
    LastName: null,
    FirstName: null,
  });
  const [filename, setFilename] = useState("Choose File");

  const [uploadedFile, setUploadedFile] = useState({});

  const updateData = (e) => {
    console.log(e);

    if (e.label) {
      setState({
        ...state,
        name: e.label,
      });
      return true;
    }

    if (e.target.name == "photos") {
      let file = e.target.files;

      setFile(file);
    } else {
      //  setState(e.target.value)
      setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    console.log(state, file);
  };
  const optios = ["one", "two", "three", "four"];
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
  const defaultOption = options[0];

  let validation = new Validator(
    // req.body,
    {
      first_name: ["required", "minlength:3"],
      last_name: ["required", "minlength:3"],
      username: ["required", "minlength:3", "lowercase"],
      email: ["required", "email", "lowercase"],
      password: ["required", "minlength:8"],
      password_confirm: ["required", "same:password"],
      dob: ["required", "date:before:2010-01-01"],
      gender: ["required", "in:male,female,unspecified"],
      tags: ["optional", "array", "minlength:3", "maxlength:32"],
    }
  );
  if (!validation.validate()) throw new Error(validation.errors.join(", "));

  return (
    <div>
      <Fragment>
        <form onSubmit={onSubmit}>
          <h6>Choose images </h6>

          <div className="custom-file">
            <input
              type="file"
              className="custom-file-inpt"
              id="customFile"
              name="photos"
              onChange={updateData}
            />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>

          <h6>Select Class</h6>
          <Dropdown
            options={options}
            style={{ paddingTop: "30px" , width: 400}}
            name="classes"
            placeholder="Select an option"
            arrowClosed={<span className="arrow-closed" />}
            arrowOpen={<span className="arrow-open" />}
            onChange={updateData}
          />
          <h6>Basic Information</h6>

          <TextField
            id="outlined-secondary"
            label="Roll Number"
            variant="outlined"
            name="roll_number"
            onChange={updateData}
            color="primary"
          />

          <input
            type="submit"
            value="upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
        {uploadedFile ? (
          <div className="row mt-5">
            <div className="col-md-6 m-auto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              <img style={{ width: "100%" }} src={uploadedFile.filePath} />
            </div>
          </div>
        ) : null}
      </Fragment>
    </div>
  );
};
export default FileUpload;
