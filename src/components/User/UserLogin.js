import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo1.png";
import Button from "react-bootstrap/Button";

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      answer: false,
      email: "",
      phone: 0,
      submit: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email;
    var phone = this.state.phone;

    var dataUser = this.state.phone;
    localStorage.setItem("phone", dataUser);

    axios
      .post("http://localhost:5000/userlogin", {
        useremail: email,
        userphone: phone,
      })
      .then((response) => {
        this.setState({
          answer: response.data,
          submit: true,
        });
        console.log(response.data);
      });
  };
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Form onSubmit={this.handleSubmit}>
            <div className="overflow">
              <img src={logo} className="logo" alt="logo" />
            </div>

            {!this.state.answer && this.state.submit ? (
              <div class="alert alert-danger" role="alert">
                Incorrect username or number entered.
              </div>
            ) : this.state.answer ? (
              this.props.history.push("/userprincipalpage")
            ) : (
              <div></div>
            )}
            <h1
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: "#124265",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              {" "}
              Login{" "}
            </h1>

            <div className="mb-3">
              <Form.Label>Email address</Form.Label>

              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                required
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </div>

            <div className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
              />
            </div>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary"
              >
                Login
              </Button>
            </div>

            <p className="forgot-password text-right">
              <a href="/usersignup"> Create your Account</a>
            </p>
            <p className="forgot-password text-right">
              <a href="/"> Back to home</a>
            </p>
          </Form>
        </div>
      </div>
    );
  }
}
