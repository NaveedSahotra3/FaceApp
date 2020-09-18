 import React from "react";
import Sidebar from "./Component/Sidebar/sidebar";
import { Router, Route, Redirect } from "react-router-dom";
import Signup from "./Component/newStudentForm/newStudentForm";
import Attendace from "./Component/attendanceDetail/attendance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Component/SignIn";
import { useSelector } from "react-redux";
import SignupPage from './Component/Signup'
import history from './history'

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const authenticated = useSelector(state => state.auth.authenticated);
  let authen = useSelector((state) => state.auth.userDetail);
  console.log(authen);

  return (
    <Route
      {...rest}
      render={(props) =>
        authen ? (
          // true
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

const App = (props) => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

     
      <Router history={history}>
        {/* <Sidebar /> */}

        <Route path="/" exact component={SignIn} />   
        <PrivateRoute exact path="/Home" component={Sidebar} />
        <PrivateRoute exact path="/NewStudentForm" component={Signup} />
        <PrivateRoute exact path="/signup" component={SignupPage} />

        <PrivateRoute exact path="/Attendace" component={Attendace} />
      </Router>
    </div>
  );
};

export default App;
