import React, { Component } from "react";
import LoginBtn from "../LoginBtn";
import API from "../../utils/API";
import { Input } from "../../components/Form";
import SignupBtn from "../SignupBtn";
import Jumbotron from "../Jumbotron";
import { Col, Row } from "../Grid";
import "./login.css";

const Keycode = [];

class Login extends Component {
  state = {
    userName: "",
    passWord: "",
    userDrugs: [],
    isAuthenticated : false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.passWord) {
        console.log(this.state.userName);
        console.log(this.state.passWord);
      API.addUser({
        userName: this.state.userName,
        passWord: this.state.passWord,
        userDrugs: this.state.userDrugs
      })
        .then(res => {
            console.log(res)
          this.setState({ userName: "", passWord: "" });
          const token = res.data.userName;
          console.log(token)
          API.redirect(token);
        })
        .catch(err => console.log(err));
    }
  };

  handleFormSubmit2 = event => {
    event.preventDefault();
    if (this.state.userName && this.state.passWord) {
      API.findUser({
        userName: this.state.userName
      })
        .then(res => {

          console.log(res.data);
          if (res.data.length == 0) {
            alert("User Not Found");
            // console.log(this.state.passWord);
          }
          // while (Keycode.length > 0) {
          //   Keycode.pop();
          // }
          else if (res.data[0].passWord === this.state.passWord) {
            Keycode.push(res.data[0].userName + " " + res.data[0].passWord);
            console.log(res.data[0].userName);
            console.log("working");
            this.isAuthenticated()
            const token = {res.data[0].userName, this.state.isAuthenticated};
            console.log(token);
            API.redirect(token);
            
          } 
          else {
            alert("sorry, that username and password was not found");
          }
        })
        .catch(err => console.log(err));
    }
  };

  isAuthenticated = () => {
    this.setState({
      isAuthenticated : true
    });
    console.log(this.state.isAuthenticated)
  }

  render() {
    return (
      <div className="big">
        <Row>
        <div className="container fluid card">
          <form>
            <div className="form-group">
              <br />
              <br />
              <label htmlFor="exampleInputEmail1">WElCOME TO GLOBAL PRESCRIPTION! SIGN IN</label>
              <br />
              <br />
              <Input
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="userName"
                placeholder="Username (required)"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <Input
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={this.state.passWord}
                onChange={this.handleInputChange}
                name="passWord"
                placeholder="Password (required)"
                type="password"
              />
            </div>
            <div>
              <LoginBtn
                type="submit"
                className="btn btn-green ml-5 mr-5"
                onClick={this.handleFormSubmit2}
              />

              <SignupBtn
                type="submit"
                className="btn btn-green ml-5"
                onClick={this.handleFormSubmit}
              />
            </div>
          </form>
        </div>
        </Row>
      </div>
    );
  }
}

export default Login;
