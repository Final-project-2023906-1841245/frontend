import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./StylePrincipal.css";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logo1.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default class EmployeePrincipalPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      works:[],
      file: '',
      imagePreviewUrl:'https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg',
          
    };
  }

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
    var id_data = localStorage.getItem("id");
    axios
      .post("http://localhost:5000/employee/principalpage", {
        id: id_data,
      })
      .then((response) => {
        this.setState({
          name: response.data[0][0].employee_name,
          email: response.data[0][0].email,
          works: response.data[1]
        });
        console.log(this.state.works);

        

       
      });

  };
  render() {
    const {imagePreviewUrl, 
    } = this.state;
    return (
      <div className="auth-wrapper-ja">
        <div className="auth-inner-ja">
          <Form method="post">
            <Row>
              <Col md={{ span: 2, offset: 0 }}>
                <img src={logo} alt="logo" />
              </Col>

              <Col>
                <Nav className="justify-content-end" activeKey="/home">
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
              <Col>
                    <Form.Label htmlFor="photo-upload" className="custom-file-upload fas">
                        <div className="img-wrap" >
                            <img class="photo-upload" src={imagePreviewUrl}/>
                            <input id="photo-upload" type="file" onChange={this.photoUpload} />

                         </div>
                         

                    </Form.Label>
              </Col>

              <Col>
                <div class="profile-head">
                  <h5>{this.state.name}</h5>
                  <h6>Web Developer and Designer</h6>
                  <p class="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>

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

              <Col>
                <input
                  type="submit"
                  class="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <div class="profile-work">
                  <h4>Your works: </h4>
                  <Form.Label>
                      {this.state.works.map((element) => {
                        return (
                          <option key={element.work_name} value={element.work_name}>
                            {element.work_name}
                          </option>
                        );
                      })}
              
                  </Form.Label>
                </div>
              </Col>
              <Col md={4}>
                <div class="row">
                  <div class="col-md-6">
                    <Form.Label className="data">User ID</Form.Label>
                  </div>
                  <div class="col-md-6">
                    <Form.Label>{localStorage.getItem("id")}</Form.Label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <Form.Label className="data">Name</Form.Label>
                  </div>
                  <div class="col-md-6">
                    <Form.Label>{this.state.name}</Form.Label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <Form.Label className="data">Email</Form.Label>
                  </div>
                  <div class="col-md-6">
                    <Form.Label>{this.state.email}</Form.Label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <Form.Label className="data">Address</Form.Label>
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
