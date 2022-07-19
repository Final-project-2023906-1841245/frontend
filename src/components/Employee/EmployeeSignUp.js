import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";

export default class EmployeeSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: true,
      id: "",
      name: "",
      works: [],
      calification: "",
      isChecked: false,
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/employeesignup").then((response) => {
      this.setState({ works: response.data });
      console.log(this.state.works);
    });
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    var id = this.state.id;
    var name = this.state.name;
    var work = this.state.work;
    var state = this.state.state;
    var calification = this.state.calification;
    axios
      .post("http://localhost:5000/employeesignup", {
        employeeid: id,
        employeename: name,
        employeeworks: work,
        employeestate: state,
        employeecal: calification,
      })
      .then((response) => {
        this.setState({
          answer: response.data,
        });
      });
  };

  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Form onSubmit={this.handleSubmit}>
            {!this.state.answer ? (
              <div class="alert alert-danger" rowle="alert">
                El empleado que ingresó ya se encuentra registrado
              </div>
            ) : (
              <h1
                style={{
                  fontSize: 35,
                  fontWeight: 800,
                  color: "#124265",
                  textAlign: "center",
                  fontFamily: "sans-serif",
                }}
              >
                Create Your Account!
              </h1>
            )}

            <Form.Group className="mb-3" controlId="formBasicID">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="id"
                placeholder="Enter your ID"
                onChange={(e) => {
                  this.setState({ id: e.target.value });
                }}
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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="Address" placeholder="Enter Address" />
              <Form.Text className="text-muted">
                We'll never share your Address with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWork">
              <Form.Label>Work</Form.Label>
              <Form.Select aria-label="Default select example">
                {this.state.works.map((element) => {
                  return (
                    <option key={element.work_name} value={element.work_name}>
                      {element.work_name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <div className="d-grid">
              <button variant="light" type="submit" className="btn btn-primary">
                SignUp
              </button>
            </div>

            <p className="forgot-password text-right">
              <a href="/employeelogin"> Create your Account</a>
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
