import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "./pro.css";
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import logo from '../assets/logo1.png';



export default class EmployeeProfile extends Component{

  
  
  
  render(){
    
    return(
        
        <Container fluid className="perencejo">
        <Form method="post">
       
        

            <div class="row" >

                <div class="col 2">
                    <img  src={logo} alt="logo" />
                </div>

                <div class="col-10" >

                <Nav >
                     <Nav.Item>
                        <Form className="d-flex" >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button  variant="primary" type="submit" className="btn btn-primary">Search</Button>
                        </Form>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/">Activity</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Logout</Nav.Link>
                    </Nav.Item>
                   
                </Nav>

                </div>
               
               
            </div>

            <div class="row">
                <div class="col-6 col-md-12">
                <Form.Label></Form.Label>
                </div>
            </div>
            
            <div class="row">
                <div class="col-6 col-md-3">
                        <div class="profile-img">
                            <img src="../../assets/ja.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                </div>

                <div class="col-6 col-md-5">
                     <div class="profile-head">
                                <h5>
                                    Kshiti Ghelani
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-4">
                    
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                   
                </div>
            </div>

            
            <div class="row">
                <div class="col-6 col-md-4">
                    <div class="profile-work">
                        
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>


                <div class="col-6 col-md-5">
              
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label>User Id</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label>User Id</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label>Name</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label>lalalala</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label>Email</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label>jejejeje@hotmail.com</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label>Address</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label> calle 5e</Form.Label>
                        </div>
                    </div>
                                    
                 </div>
                
            </div>
        
       
      
      
            
            
        </Form>           
    </Container>
    );
  }
}
