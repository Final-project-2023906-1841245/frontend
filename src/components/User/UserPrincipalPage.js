import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./PrincipalPageStyle.css";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logote.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


export default class UserPrincipalPage extends Component{


    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          address: "",
          phone: "",
          file: '',
          description:"",
          imagePreviewUrl:'https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg',          
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
        axios.post("http://localhost:5000/user/principalpage", {"phone": phone_data}).then((response) => {
            console.log(response.data)
            this.setState({ name: response.data[0].user_name });
            this.setState({ email: response.data[0].email });
            this.setState({description: response.data[0].user_description});

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
                <div className="logo">
                    <img  src={logo} alt="logo"  />
                  </div>
                </Col>
               

              <Col  md={{ span: 9, offset: 2}}>
                <Nav className="justify-content-end" activeKey="/home" fill = 'true'>
                  <Nav.Item>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button
                        variant="primary"
                        type="submit"
                        className="btn btn-primary"
                      >
                        Search
                      </Button>
                    </Form>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="">Activity</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/">Log Out</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Form.Label></Form.Label>
            </Row>

            <Row>
               
              <Col  md={{ span: 4, offset: 3 }}>
                    <div class="profile-head">
                                <h5>
                                    {this.state.name}
                                </h5>
                                <h6>
                                    {this.state.description}
                                </h6>
                                <p class="proile-rating">RANKINGS : <span>8/10</span></p>

                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col  md={{ span: 1, offset: 1 }}>
                    <Form.Label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className="img-wrap" >
                            <img class="photo-upload" src={imagePreviewUrl}/>
                            <input id="photo-upload" type="file" onChange={this.photoUpload} />
                         </div>
                         

                    </Form.Label>
              </Col>

              
            </Row>

            <Row>
                
                <Col   md={{ span: 4, offset: 3 }}>
              
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

                <Col md={{ span: 3, offset: 1 }}>
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
                 </Col>
                
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}