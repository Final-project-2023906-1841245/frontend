import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'

export default class UserLogin extends Component{

  constructor(){
    super();
    this.state={
      answer:'Login'
    }
  }
  
  
  render(){
    const searchUser = async() =>{
      const response = await axios.get('/user')
      console.log(response)
      this.state.answer = response
    }
    return(
      <Form>
        <h1>{this.state.answer}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="number" placeholder="number" />
        </Form.Group>
        <Button variant="light" type="submit" onClick={searchUser}>
          Submit
        </Button>
        <Link to = "/" style={{textDecoration: 'none'}}>
          <a className="text-white"> Back to home </a>, 
        </Link>
        <Link to = "/usersignup">
          <a className="text-white"> Sign Up </a>
        </Link>
      </Form>
    );
  }
}
