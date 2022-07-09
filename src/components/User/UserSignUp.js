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
      answer: true,
      name: '',
      email: '',
      phone: ''
    }
  }
  handleSubmit = (e) =>{
      e.preventDefault();
      var name = this.state.name;
      var email = this.state.email;
      var phone = this.state.phone;
      axios.post('/usersignup', {username: name, useremail: email, userphone: phone}).then(response=>{
        this.setState({
          answer: response.data
        })
      })
    }
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        {!this.state.answer? <div class="alert alert-danger"  role="alert">
          El usuario que ingresó ya se encuentra registrado
        </div> : <h1>Create Your Account!</h1>}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your Name" onChange={(e)=>{this.setState({name: e.target.value})}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="Address" placeholder="Enter Address"/>
          <Form.Text className="text-muted">
            We'll never share your Address with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{this.setState({email: e.target.value})}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{this.setState({phone: e.target.value})}}/>
        </Form.Group>
        <Button variant="light" type="submit">
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
