import React, { Component } from "react";
import Form from "react-bootstrap/Form";
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
      prices: [],
      selectedworks: [],
      temporalwork: null,
      temporalprice: "",
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/employeeWorks").then((response) => {
      var res = response.data;
      res.unshift({ work_name: " " });
      this.setState({ works: res });
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var empworks = this.state.selectedworks;
    var empprices = this.state.prices;
    var id = localStorage.getItem("id");
    axios
      .post("http://localhost:5000/employeeWorks", {
        employeeid: id,
        employeeworks: empworks,
        employeeprices: empprices,
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
              <img src={logo} className="logo" alt="logo" />
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
                onChange={(e) => {
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

            <Form.Label>Price</Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                type="price_work"
                placeholder="Enter price for hour"
                onChange={(e) => {
                  this.setState({ temporalprice: e.target.value });
                }}
                required
              />
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  this.state.selectedworks.push(this.state.temporalwork);
                  this.state.prices.push(this.state.temporalprice);
                  this.forceUpdate();
                }}
              >
                Add work
              </Button>
            </InputGroup>
            <div className="tags-input-container">
              {this.state.selectedworks.map((work, index) => {
                return (
                  <div className="tag-item" key={index}>
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
