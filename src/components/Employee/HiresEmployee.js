import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Table, Button, Form } from "react-bootstrap";



export default class HiresEmployee extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: false,
      employeeid: localStorage.getItem("id"),
      data: [],

    };
  };
  componentDidMount = () => {
    var employeeid = this.state.employeeid;

    axios
      .post("http://localhost:5000/employee/gethires", {
        employeeid : employeeid,

      })
      .then((response) => {
        
        this.setState({
          data: response.data,
        });
      });
  };

  render() {
    return (
      <div className="auth-wrapper-ja">
        <div className="auth-inner-ja">
          
          <Form.Group>
          <Button color="success" href="/userprincipalpage">
            Back to home
          </Button>
        
          </Form.Group>

          <Form.Group>

            <Form.Label>
              <h1  style={{
                  fontSize: 30,
                  fontWeight: 800,
                  color: "#124265",
                  marginLeft: 300,
                  textAlign: "center",
                  fontFamily: "sans-serif",
                }}>Your hires are: </h1>
            </Form.Label>

          </Form.Group>

          <Form.Group>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Work</th>
                  <th>Description</th>
                  <th>Payment Method</th>
                  
                </tr>
              </thead>

              <tbody>
                {this.state.data.map((dato) => (
                  <tr>
                    <td>{dato.hire_date}</td>
                    <td>{dato.id_work}</td>
                    <td>{dato.hire_description}</td>
                    <td>{dato.hire_paymethod}</td>
                    
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </Form.Group>


        </div>
      </div>
    );
  }
}
