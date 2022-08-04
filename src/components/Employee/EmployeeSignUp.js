import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import logo from "../../assets/logo1.png";

export default class EmployeeSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      id: "",
      name: "",
      address: "",
      email: "",
      isChecked: false,
      submit: false,
    };
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var id = this.state.id;
    var name = this.state.name;
    var isChecked = this.state.isChecked;
    var address = this.state.address;
    var email = this.state.email;

    var dataEmployee = JSON.stringify(this.state);

    localStorage.setItem(this.state.name, dataEmployee);

    axios
      .post("http://localhost:5000/employeesignup", {
        employeeid: id,
        employeename: name,
        employeeaddress: address,
        employeeemail: email,
      })
      .then((response) => {
        this.setState({
          logged: response.data,

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

            {!this.state.logged && this.state.submit ? (
              <div class="alert alert-danger" rowle="alert">
                El empleado que ingresó ya se encuentra registrado
              </div>
            ) : this.state.logged ? (
              this.props.history.push("/employeeworks")
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

            <Form.Group className="mb-3" controlId="formBasicID">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="id"
                placeholder="Enter your ID"
                onChange={(e) => {
                  this.setState({ id: e.target.value });
                }}
                required
              />
            </Form.Group>

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
              <Form.Text className="text-muted">
                We'll never share your Address with anyone else.
              </Form.Text>
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              <a href="/employeelogin"> I Already have an Account</a>
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
