import React, { Component } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Userlogin.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      answer: true,
      email: "",
      phone: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email;
    var phone = this.state.phone;
    axios
      .post("http://localhost:5000/userlogin", {
        useremail: email,
        userphone: phone,
      })
      .then((response) => {
        this.setState({
          answer: response.data,
        });
      });
  };
  render() {
    return (
      <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Form onSubmit={this.handleSubmit} >
          {!this.state.answer ? (
            <div class="alert alert-danger" role="alert">
              Incorrect username or number entered. 
            </div>
          ) : (
            <div></div>
          )}
          <h1 style={{
            fontSize: 35,
            fontWeight: 800,
            color: "#124265",
            textAlign: "center",
            fontFamily: "sans-serif"
          }}>   Login   </h1>

          <div className="mb-3">
            <Form.Label>Email address</Form.Label>
            
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
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
            <button variant="light" type="submit"  className="btn btn-primary">
            Login
            </button>
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
