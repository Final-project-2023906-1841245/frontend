import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'

export default class EmployeeLogin extends Component{

  constructor(){
    super();
    this.state={
      answer:'Login'
    }
  }
  
  
  render(){
    const searchUser = async() =>{
      const response = await axios.get('/employeelogin')
      console.log(response)
      this.state.answer = response
    }
    return(
      <Form>
        <h1>{this.state.answer}</h1>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="Id" placeholder="Enter Id" />
          <Form.Text className="text-muted">
            We'll never share your id with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="light" type="submit" onClick={searchUser}>
          Submit
        </Button>
        <Link to = "/" style={{textDecoration: 'none'}}>
          <a className="text-white"> Back to home </a>, 
        </Link>
        <Link to = "/employeesignup">
          <a className="text-white"> Sign Up </a>
        </Link>
      </Form>
    );
  }
}
