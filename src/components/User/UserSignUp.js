import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import logo from '../../assets/logo.png';

export default class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      answer: true,
      name: '',
      email: '',
      address: '',
      phone: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var name = this.state.name;
    var email = this.state.email;
    var phone = this.state.phone;
    var address = this.state.address;
    axios.post('http://localhost:5000/usersignup', {username: name, useraddress: address,  useremail: email, userphone: phone}).then(response=>{
      this.setState({
        answer: response.data
        
      })
      
    })
  }
  render(){
    return(
      <div className='auth-wrapper'>
      <div className='auth-inner'>
      <Form onSubmit={this.handleSubmit}>

          <div className="overflow">
                <img src={logo} alt="logo" />
                <Form.Label style={{fontSize: 20}}>Mande</Form.Label>

          </div>
          
        {!this.state.answer ? (
          <div class="alert alert-danger" role="alert">
            El usuario que ingresó ya se encuentra registrado
          </div>
        ) : (
          <h1 style={{
            fontSize: 30,
            fontWeight: 800,
            color: "#124265",
            textAlign: "center",
            fontFamily: "sans-serif"
          }} >Create Your Account</h1>
        )}
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
          <Form.Control
            type="Address"
            placeholder="Enter Address"
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your Address with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              this.setState({ phone: e.target.value });
            }}
          />
        </Form.Group>

        <div className="d-grid">
        <button variant="light" type="submit"  className="btn btn-primary">
          SignUp
        </button>
        </div>
        <p className="forgot-password text-right">
           <a href="/userlogin"> I Already have an Account</a>
        </p>
        <p className="text-right" >
           <a href="/"> Back to home</a>
        </p>
      </Form>
      </div>
      </div>
    );
  }
}
