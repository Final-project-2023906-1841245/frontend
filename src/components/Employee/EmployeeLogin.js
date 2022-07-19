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
      <div className='auth-wrapper'>
      <div className='auth-inner'>
        <Form>
          <h1 style={{
              fontSize: 35,
              fontWeight: 800,
              color: "#124265",
              textAlign: "center",
              fontFamily: "sans-serif"
            }}>{this.state.answer}</h1>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="Id" placeholder="Enter Id" />
            <Form.Text className="text-muted">
              We'll never share your id with anyone else.
            </Form.Text>
          </Form.Group>

          <div className="d-grid">
            <button variant="light" type="submit"  className="btn btn-primary">
            Login
            </button>
          </div>
        
          <p className="forgot-password text-right">
           <a href="/employeesignup"> Create your Account</a>
          </p>
          <p className="forgot-password text-right">
            <a href="/"> Back to home</a>
          </p>

        </Form>
      </div>
      </div>
    );
  }
}
