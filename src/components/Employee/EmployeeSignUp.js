import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios'

export default class EmployeeSignUp extends Component{

  constructor(props){
    super(props);
    this.state={
      answer: true,
      id: '',
      name: '',
      work:[],
      calification: '',
      isChecked: false
    }
  }

  toggleChange = ()=>{
    this.setState({
      isChecked: !this.state.isChecked
    })
  }
  handleSubmit = async(e) =>{
    e.preventDefault();
    var id = this.state.id;
    var name = this.state.name;
    var work= this.state.work;
    var state = this.state.state;
    var calification = this.state.calification;
    axios.post("http://localhost:5000/employeesignup", {employeeid: id, employeename: name, employeeworks: work, employeestate: state, employeecal: calification}).then(response=>{
      this.setState({
        answer: response.data
      })
    })

  }

  render(){
   
    return(
       <Form onSubmit={this.handleSubmit}>
        {!this.state.answer? <div class="alert alert-danger"  rowle="alert">
          El empleado que ingresó ya se encuentra registrado
        </div> : <h1>Create Your Account!</h1>}
        <Form.Group className="mb-3" controlId="formBasicID">
            <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter your ID" onChange={(e)=>{this.setState({id: e.target.value})}}/>
        </Form.Group>

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

        <Form.Group className="mb-3" controlId="formBasicWork">
          <Form.Label>Work</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicWork">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Cali</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bogota</Dropdown.Item>
            <Dropdown.Item href="#/action-3">La Plata</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
            
        </Form.Group>

        

        <Button variant="light" type="submit">
          Submit
        </Button>
        <Link to = "/employeelogin" style={{textDecoration: 'none'}}>
          <a className="text-white"> I already have an account </a>,
        </Link>
        <Link to = "/">
          <a className="text-white"> Back home </a>
        </Link>
      </Form>
    );
  }
}
