import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'

export default class UserSignUp extends Component{

  constructor(){
    super();
    this.state={
      answer:'Create your Account'
    }
  }
  
  
  render(){
    const searchUser = async() =>{
      const response = await axios.get('/usersignup')
      console.log(response)
      this.state.answer = response
    }
    return(
      <Form>
        <h1>{this.state.answer}</h1>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your Name" />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="Address" placeholder="Enter Address" />
          <Form.Text className="text-muted">
            We'll never share your Address with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="light" type="submit" onClick={searchUser}>
          Submit
        </Button>
        <Link to = "/user" style={{textDecoration: 'none'}}>
          <a className="text-white"> If you have an Account  </a>,
        </Link>
        <Link to = "/">
          <a className="text-white"> Back home </a>
        </Link>

      
      </Form>
    );
  }
}
