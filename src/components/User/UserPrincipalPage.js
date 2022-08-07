import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import "./PrincipalPageStyle.css";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/logo1.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default class UserPrincipalPage extends Component{


    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          address: "",
          phone: "",
          file: '',
          imagePreviewUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Microsoft_Account.svg',
          
        };
    };
    
    photoUpload = e =>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        reader.readAsDataURL(file);
     
    };
    
    
  

    componentDidMount = () => {  
        var phone_data = localStorage.getItem("phone");
        axios.post("http://localhost:5000/userprincipalpage", {"phone": phone_data}).then((response) => {
            console.log(response.data)
            this.setState({ name: response.data[0].user_name });
            this.setState({ email: response.data[0].email });
            console.log(this.state.name);
            console.log(this.state.email);
        });
    };

  render(){
    const {imagePreviewUrl, 
        } = this.state;
    
    return(
        
        <div className="auth-wrapper-ja">
        <div className="auth-inner-ja">
        <Form method="post">


            <Row>
                <Col  md={{ span: 1, offset: 0 }}>
                    <img  src={logo} alt="logo" className='logo' />
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
                    <Form.Label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className="img-wrap" >
                            <img class="photo-upload" src={imagePreviewUrl}/>
                         </div>
                         <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input id="photo-upload" type="file" onChange={this.photoUpload} />
                        </div>

                    </Form.Label>

                   
                      
                   
                       
                </Col>
                    
                <Col>
                    <div class="profile-head">
                                <h5>
                                    {this.state.name}
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
                


                <Col   md={{ span: 4, offset: 4 }}>
              
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>User ID</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >{localStorage.getItem("phone")}</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>Name</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >{this.state.name}</Form.Label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <Form.Label className='data'>Email</Form.Label>
                        </div>
                        <div class="col-md-6">
                            <Form.Label >{this.state.email}</Form.Label>
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
        </div>
        </div>
    );
  }
}
