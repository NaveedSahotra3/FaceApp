import React, { Fragment, useState } from 'react'
// var  React , {Fragment, useState}  = require('react');
import axios from 'axios'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Validator from 'input-field-validator';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



// import { TextField } from '@material-ui/core';
import { Button, Checkbox, Form } from 'semantic-ui-react'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

const FileUpload = () => {
  const classes = useStyles();
  const [file, setFile] = useState('');
  const [state , setState] = useState({

    name: null,
    roll_number: null,
    LastName: null,
    FirstName: null

  });
  const [filename, setFilename] = useState('Choose File');

  const [uploadedFile, setUploadedFile] = useState({});


 const updateData = (e) => {
    console.log(e)
    
    if(e.label){
      setState({
        ...state,
        name: e.label
      })
      return true
    }

    if (e.target.name == "photos") {
  
      let file = e.target.files
  
      setFile(file)
  
  
  } else {
  
//  setState(e.target.value)
      setState({
          [e.target.name]: e.target.value
      })
  
  }
  }
  
  // let state = {
  //     file: '',
  //     setFile: '',
  //     filename: 'chooseFile',
  //     setFilename: ''
  // }
  // const onChange = e => {

  //   setFile(e.target.files[0]);
  //   setFilename(e.target.files[0].name);

  // }
  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    console.log(state , file);
    

    // try {
    //   const res = axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   });
    //   const { fileName, filePath } = res.data
    //   setUploadedFile({ fileName, filePath });
    // } catch (err) {
    //   if (err.respond) {
    //     if (err.response.status === 500) {
    //       console.log("there was a problem with the server")

    //     } else {
    //       console.log(err.response.data.msg)
    //     }
    //   }
    // }

  }
  const optios = [
      'one', 'two', 'three' ,'four'
  ];
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', className: 'myOptionClassName' },
    {
      type: 'group', name: 'group1', items: [
        { value: 'three', label: 'Three', className: 'myOptionClassName' },
        { value: 'four', label: 'Four' }
      ]
    },
    {
      type: 'group', name: 'group2', items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' }
      ]
    }
  ];
  const defaultOption = options[0];


  let validation = new Validator
    (
      // req.body,
      {
        first_name: ['required', 'minlength:3'],
        last_name: ['required', 'minlength:3'],
        username: ['required', 'minlength:3', 'lowercase'],
        email: ['required', 'email', 'lowercase'],
        password: ['required', 'minlength:8'],
        password_confirm: ['required', 'same:password'],
        dob: ['required', 'date:before:2010-01-01'],
        gender: ['required', 'in:male,female,unspecified'],
        tags: ['optional', 'array', 'minlength:3', 'maxlength:32']
      }
    );
  if (!validation.validate())
    throw new Error(validation.errors.join(', '));



  

  return (
    <div>
      <Fragment>
        <form onSubmit={onSubmit}>
          <h6>Choose images </h6>

          <div className="custom-file">
            <input type="file" className="custom-file-inpt" id="customFile" name="photos" onChange={updateData} />
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>



          <h6>Select Class</h6>
          <Dropdown options={options} style={{ paddingTop: "30px" }} 
            name="classes" 
            placeholder="Select an option"
            arrowClosed={<span className="arrow-closed" />}
            arrowOpen={<span className="arrow-open" />}
            onChange={updateData}
          />
          <h6>Basic Information</h6>

       
            <TextField id="standard-secondary" onChange={updateData}  name="FirstName" label="First Name" color="secondary" />
            <TextField
              id="filled-secondary"
              label="Last Name"
              name="LastName"
              variant="filled"
              onChange={updateData}
              color="secondary"
            />
            <TextField
              id="outlined-secondary"
              label="Roll Number"
              variant="outlined"
              name="roll_number"
              onChange={updateData}
              color="secondary"
              // onChange={updateData}
            />
        


          



          <input type="submit" value="upload" className="btn btn-primary btn-block mt-4" />

        </form>
        {uploadedFile ? <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} />
          </div>
        </div> : null}







      </Fragment>


    </div>

  )

}
export default FileUpload


// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignIn() {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={8}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }