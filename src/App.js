import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = (e) => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active"> Admin </h2>
          <h2 className="inactive underlineHover">
            {" "}
            <a href="loginStudent">Student</a>{" "}
          </h2>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="login"
              className="fadeIn second display-block"
              name="email"
              placeholder="Username"
            />
            <input
              type="password"
              id="password"
              className="fadeIn third display-block"
              name="password"
              placeholder="Password"
            />
            <div className="fadeIn third">
              <input type="checkbox" id="togglePassword" /> Show Password
            </div>
            <button type="submit" className="fadeIn fourth btn">
              {" "}
              sign In
            </button>
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
