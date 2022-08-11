import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Table, Button, Container } from "react-bootstrap";


export default class HiresEmployee extends React.Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    var phone = localStorage.getItem("phone");
    var work = localStorage.getItem("work");

    axios
      .post("http://localhost:5000/employee/gethires", {
        phone: phone,
        work_name: work,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      });
  };

  render() {
    return (
      <>
        <Container style={{ background: "white", backgroundImage: "none" }}>
          <br />
          <Button color="success" href="/userprincipalpage">
            Back to home
          </Button>
          <br />
         
          
        </Container>
      
      </>
    );
  }
}
