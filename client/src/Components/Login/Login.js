import React, { Component } from "react";
import LoginBtn from "../LoginBtn";
import API from "../../utils/API";
import { Input } from "../../Components/Form";
import SignupBtn from "../SignupBtn";

const Keycode = [];

class Login extends Component {
    state = {
        userName: "",
        passWord: ""
    };

    // componentDidMount() {
    //     this.loadUser();
    // }

    // loadUser = () => {
    //     API.loadUser()
    //         .then(res =>
    //             this.setState({ userName: res.data, passWord: ""})
    //         )
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.passWord) {
            API.addUser({
                userName: this.state.userName,
                passWord: this.state.passWord
            })
                .then(res => {
                    this.setState({userName: "", passWord: "" })
                    API.redirect()
                })
                .catch(err => console.log(err));
        }
    };

    handleFormSubmit2 = event => {
        event.preventDefault();
        if (this.state.userName && this.state.passWord) {
            API.findUser({
                userName: this.state.userName,
                passWord: this.state.passWord
            })
                .then(res => {
                    while (Keycode.length > 0) {
                        Keycode.pop();
                    }
                    Keycode.push(res.data[0].userName + " " +res.data[0].passWord)
                console.log(res.data[0].userName)
                console.log(Keycode)
                if(Keycode.length>0){
                    API.redirect()
                }
                else{
                    alert("sorry, that username and password was not found");
                }
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="container fluid card">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <Input 
                        className="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="username (required)"
                    />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                    <Input
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={this.state.passWord}
                        onChange={this.handleInputChange}
                        name="passWord"
                        placeholder="password (required)"
                        type="password"
                    />
                        
  </div>
                <div>
                    <LoginBtn type="submit" className="btn btn-blue ml-5 mr-5" onClick={this.handleFormSubmit2} />
                
                    <SignupBtn type="submit" className="btn btn-green ml-5" onClick={this.handleFormSubmit} />
                
                </div>
                            
</form>
           
          
            </div>
       

                    
        );
    }
}

export default Login;