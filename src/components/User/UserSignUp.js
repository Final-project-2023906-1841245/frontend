import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import logo from "../../assets/logo1.png";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      answer: false,
      name: "",
      email: "",
      address: "",
      phone: 0,
      submit: false,
      description: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var phone = this.state.phone;
    var name = this.state.name;
    var email = this.state.email;
    var address = this.state.address;
    var description = this.state.description;

    var useraddress = this.state.address;
    localStorage.setItem("useraddress", useraddress);
    
    var dataUser = this.state.phone;
    localStorage.setItem("phone", dataUser);
    
    axios
      .post("http://localhost:5000/user/signup", {
        userphone: phone,
        username: name,
        useraddress: address,
        useremail: email,
        userdescription: description,
                                 
      })
      .then((response) => {
        console.log("EL VALOR BOOLEANO ES:", response.data)
        this.setState({
          answer: response.data,
          submit: true,
        });
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

            {!this.state.answer  && this.state.submit ? (
              <div class="alert alert-danger" role="alert">
                Incorrect username or number entered.
              </div>
            ) :  this.state.answer ? (
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
                Create Your Account
              </h1>
          
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your Name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="Address"
                placeholder="Enter Address"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
                required
              />
        
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
                required
              />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>About myself  </Form.Label>
              <Form.Control
                type="description"
                placeholder="Enter description"
                onChange={(e) => {
                  this.setState({ description : e.target.value });
                }}
                required
              />
              
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-primary"
              >
                SignUp
              </Button>
            </div>

            <p className="forgot-password text-right">
              <a href="/userlogin"> I Already have an Account</a>
            </p>
            <NavLink to="/" className="link" activeClassName="active">
              Back home
            </NavLink>
          </Form>
        </div>
      </div>
    );
  }
}
