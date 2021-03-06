import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.jpg";

function Navbar() {
  var value = false;
  if (window.localStorage.length > 0) {
    value = true;
  }
  function DocIsLogged(val){
    if(val ){
      return (
      
        <Link
        to="/doctorProfile/:id"
        className="nav-link  ml-3 mr-3"
        style={{ fontSize: "16px" }}
      >
        <li className="nav-item" >My Profile</li>
      </Link>   
      )
    }
 }

 function DocIsLogged2(val){
  if(val ){
    return (
    
      <Link
        to="/doctorQuestions"
        className="nav-link  ml-3 mr-3"
         style={{ fontSize: "16px" }}
       >
        <li className="nav-item" >Not Answered Questions</li>
       </Link>
    )
  }
}
  
function UserIsLogged(val){
  if(val ){
    return (
    
      <Link
        to="/userPro"
        className="nav-link  ml-3 mr-3"
         style={{ fontSize: "16px" }}
       >
        <li className="nav-item" >My Profile</li>
       </Link>
    )
  }
}
function UserIsLogged2(val){
  if(val ){
    return (
    
        <Link
            to="/askQuestions"
            className="nav-link  ml-3 mr-3"
          style={{ fontSize: "16px" }}
              >
         <li className="nav-item">Get Free Counseling Now</li>
         </Link> 
    )
  }
}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mt-3">
        {value === false ?
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link
                to="/"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <img src={Logo} alt="logo"></img>
              </Link>
              <Link
                to="/doctors"
                className="nav-link ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Doctors</li>
              </Link>
              <Link
                to="/questions"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Questions</li>
              </Link>
              <Link
                to="/articles"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Articles</li>
              </Link>
                
              <Link
                to="/login"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Get Free Counseling Now</li>
              </Link>

              <Link
                to="/login"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Login</li>
              </Link>
              {/* <Link
              to="/signup"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">SignUp</li>
            </Link> */}
              {/* <Link
                to="/doctorProfile"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Doctor Profile</li>
              </Link> */}
            </ul>
          </div>




          :


          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <Link
                to="/"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <img src={Logo} alt="logo"></img>
              </Link>

              {UserIsLogged(window.localStorage.userId)}
              {UserIsLogged2(window.localStorage.userId)}
              <Link
                to="/doctors"
                className="nav-link ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Doctors</li>
              </Link>

              {DocIsLogged(window.localStorage.doctorId)}
              {DocIsLogged2(window.localStorage.doctorId)}

              <Link
                to="/questions"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Questions</li>
              </Link>
              <Link
                to="/articles"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Articles</li>
              </Link>
              
              <Link
                to="/logout"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item" onClick={logout} >Logout</li>
              </Link>
              {/* <Link
              to="/signup"
              className="nav-link  ml-3 mr-3"
              style={{ fontSize: "16px" }}
            >
              <li className="nav-item">SignUp</li>
            </Link> */}
              {/* <Link
                to="/doctorProfile"
                className="nav-link  ml-3 mr-3"
                style={{ fontSize: "16px" }}
              >
                <li className="nav-item">Doctor Profile</li>
              </Link> */}
            </ul>
          </div>
        }
      </div>
    </nav>
  );
}

function logout() {
  window.localStorage.clear();
  window.location = "/";
}


export default Navbar;

