import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import logo from '../../assets/logo.png';

export default class employeeWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: true,
      works: [],
     
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/employeeWorks").then((response) => {
      this.setState({ works: response.data });
      console.log(this.state.works);
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
  
    var work = this.state.work;
   
    axios
      .post("http://localhost:5000/employeeWorks", {
        
        employeeworks: work,
        
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
                <Form.Label style={{fontSize: 20}}>Mande</Form.Label>

          </div>
              
            <h1
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#124265",
                  textAlign: "center",
                  fontFamily: "sans-serif",
                }}>
                Insert your works
            </h1>
            

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

              <Form.Control
                type="price_work"
                placeholder="Enter price for hour"
                onChange={(e) => {
                  this.setState({  });
                }}
              />
            
            </Form.Group>

            <div className="d-grid">
              <button variant="light" type="submit" className="btn btn-primary">
                SignUp
              </button>
            </div>

          </Form>
        </div>
      </div>
    );
  }
}
