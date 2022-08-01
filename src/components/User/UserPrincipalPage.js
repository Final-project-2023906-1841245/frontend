import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import "./PrincipalPageStyle.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo1.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default class UserPrincipalPage extends Component{

  
  
  
  render(){
    
    return(
        
        <Container fluid  className="perencejo" style={{paddingTop: 10 }}>
        <Form method="post">


            <Row>
                <Col xs={12} sm={4} md={4}>
                    <img  src={logo} alt="logo" />
                </Col>

                <Col>
                    <Nav className="justify-content-end" activeKey="/home">
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
                        <Nav.Link eventKey="">Activity</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link  href="/">Log Out</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div class="profile-img">
                            <img src="../../assets/ja.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                </Col>
                    
                <Col>
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
                </Col>

                <Col>
                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                </Col>
            </Row>
            
            

            
            <Row>
                <Col  md={4}>
                    <div class="profile-work">
                        
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </Col>


                <Col  md={4}>
              
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>User ID</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >User Id</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>Name</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >lalalala</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>Email</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >jejejeje@hotmail.com</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>Address</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label> calle 5e</Form.Label>
                        </div>
                    </div>
                                    
                 </Col>
                
            </Row>
        
       
      
      
            
            
        </Form>           
    </Container>
    );
  }
}
