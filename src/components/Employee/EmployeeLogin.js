import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class EmployeeLogin extends Component {
  constructor() {
    super();
    this.state = {
      answer: false,
      id: 0,
      submit: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var dataEmployee = this.state.id;
    localStorage.setItem("id", dataEmployee);

    axios
      .post("http://localhost:5000/employee/login", {
        employeeid: dataEmployee,
      })
      .then((response) => {
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

            {!this.state.answer && this.state.submit ? (
              <div class="alert alert-danger" role="alert">
                Incorrect username or number entered.
              </div>
            ) : this.state.answer ? (
              this.props.history.push("/employeeprincipalpage")
            ) : (
              <div></div>
            )}

            <h1
              style={{
                fontSize: 35,
                fontWeight: 800,
                color: "#124265",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              Login
            </h1>

            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label>ID Number</Form.Label>
              <Form.Control
                type="Id"
                placeholder="Enter Id"
                onChange={(e) => {
                  this.setState({ id: e.target.value });
                }}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your id with anyone else.
              </Form.Text>
            </Form.Group>

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
              <a href="/employeesignup"> Create your Account</a>
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
