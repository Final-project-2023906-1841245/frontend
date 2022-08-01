import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo1.png";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default class employeeWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: true,
      works: [],
      ref: React.createRef(),
      price: "",
      selectedworks: [],
      temporalwork: "",
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/employeeWorks").then((response) => {
      this.setState({ works: response.data });
      // console.log(this.state.works);
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var ref = this.state.ref;
    var works = this.state.works;
    var price = this.state.price;

    console.log(ref);
    console.log(price);
    console.log(this.state.selectedworks);

    axios
      .post("http://localhost:5000/employeeWorks", {
        employeeworks: works,
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
            <div className="overflow">
              <img src={logo} alt="logo" />
            </div>

            <h1
              style={{
                fontSize: 30,
                fontWeight: 800,
                color: "#124265",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              Insert your works
            </h1>

            <Form.Group className="mb-3" controlId="formBasicWork">
              <Form.Label>Work</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onClick={(e) => {
                  this.setState({ temporalwork: e.target.value });
                }}
              >
                {this.state.works.map((element) => {
                  return (
                    <option key={element.work_name} value={element.work_name}>
                      {element.work_name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Label>price</Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                type="price_work"
                placeholder="Enter price for hour"
                onChange={(e) => {
                  this.setState({ price: e.target.value });
                }}
                required
              />
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  this.setState((prevState) => ({
                    selectedworks: [
                      prevState.selectedworks,
                      this.state.temporalwork,
                    ],
                  }));
                  console.log(this.state.temporalwork);
                }}
              >
                Add work
              </Button>
            </InputGroup>
            <div className="tags-input-container">
              {this.state.selectedworks.map((work) => {
                return (
                  <div className="tag-item">
                    <span className="text">{work}</span>
                    <span className="close">&times;</span>
                  </div>
                );
              })}
            </div>

            <Form.Group>
              <div className="d-grid">
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary"
                >
                  Continue
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
