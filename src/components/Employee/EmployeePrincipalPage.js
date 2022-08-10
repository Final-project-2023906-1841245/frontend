import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./StylePrincipal.css";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/logote.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default class EmployeePrincipalPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      works: [],
      description: "",
      imageName: 'https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg',

    };
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
          description: response.data[0][0].employee_description,
          works: response.data[1]
        });
        
      });

  };
  render() {
    const {imageName, 
    } = this.state;
  
    return (
      <div className="auth-wrapper-ja">
        <div className="auth-inner-ja">
          <Form method="post">
            <Row>
              <Col md={{ span: 2, offset: 0 }}>
                <img src={logo} alt="logo" className="logo" />
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

              <Col md={{ span: 4, offset: 3 }}>
                <div class="profile-head">
                  <h5>{this.state.name}</h5>
                  <h6>{this.state.description}</h6>
                  <p class="proile-rating">
                    RANKINGS : <span>8/10</span></p>
                  <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="home" title="Profile">
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

                    </Tab>

                    <Tab eventKey="profile" title="Works">
                      <div class="profile-work">

                        <Form.Label className="works">
                          {this.state.works.map((element) => {
                            return (
                              <option key={element.work_name} value={element.work_name}>
                                {element.work_name}
                              </option>
                            );
                          })}

                        </Form.Label>
                      </div>

                    </Tab>

                  </Tabs>

                </div>
              </Col>
              <Col md={{ span: 1, offset: 1 }}>

                <form method="POST"
                  action="http://localhost:5000/employee/principalpage/upload"
                  enctype="multipart/form-data"
                  className="custom-file-upload fas">

                  <div class="profile-img">
                    <img src={imageName} alt="" />
                    <div class="file btn btn-lg btn-primary">
                      Upload your photo
                      <input type="file" name="profile-file" id="photo-upload" required />
                    </div>
                  </div>

                  <div class="col-3">
                    <input type="submit" value="Upload" className="btn btn-outline-primary" />

                  </div>

                </form>

              </Col>


            </Row>


          </Form>
        </div>
      </div>
    );
  }
}
