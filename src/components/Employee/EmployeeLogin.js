import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import axios from 'axios'

export default class EmployeeLogin extends Component{

  constructor(){
    super();
    this.state={
      answer:true,
      id:"",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var id = this.state.id;
    
    axios
      .post("http://localhost:5000/employeelogin", {
        employeeid: id,
        
      })
      .then((response) => {
        this.setState({
          answer: response.data,
        });
      });
  };
  
  
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
              Incorrect username or number entered. 
            </div>
          ) : (
            <div></div>
          )}
          <h1 style={{
              fontSize: 35,
              fontWeight: 800,
              color: "#124265",
              textAlign: "center",
              fontFamily: "sans-serif"
            }}>Login</h1>
          <Form.Group className="mb-3" controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control 
              type="Id" 
              placeholder="Enter Id" 
              onChange={(e) => {
                this.setState({ id: e.target.value });
              }}
              />
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
