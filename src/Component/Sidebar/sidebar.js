import React from "react";
import "./sidebar.css";
import "./font-awesome/css/font-awesome.min.css";
// import './bootstrap/bootstrap.min.css'
import "./bootstrap/bootstrap.min.css";
import { BrowserRouter, Link, Route, withRouter } from "react-router-dom";
import photo from "./is.jpg";
import history from "../../history";
import Cookie from "js-cookie";
// import 'css/bootstrap/bootstrap.min.css';
// import { Link } from "react-router-dom"
{
  /* <link href="css/bootstrap/bootstrap.min.css" rel="stylesheet"/> */
}
class Sidebar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    Cookie.remove("user");
    setTimeout(() => {
      history.push("/");
    },1000);
  };
  render() {
    return (
      <div>
        {
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
            id="sideNav"
          >
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <span class="d-block d-lg-none  mx-0 px-0">
                <img src="/img/logo-white.png" alt="" class="img-fluid" />
              </span>
              <span class="d-none d-lg-block">
                <img
                  class="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src={photo}
                  alt=""
                />
              </span>
            </a>
            <h1 className="topHeading">Category</h1>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/NewStudentForm" class="nav-link js-scroll-trigger">
                    Add New Student
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Attendace" class="nav-link js-scroll-trigger">
                    Attendence Detail
                  </Link>
                  <Link to="/signup" class="nav-link js-scroll-trigger">
                    Add New Expert
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="#"
                    class="nav-link js-scroll-trigger"
                    onClick={this.logout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        }
      </div>
    );
  }
}

export default withRouter(Sidebar);
