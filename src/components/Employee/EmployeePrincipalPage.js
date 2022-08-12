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
      address: localStorage.getItem("employeeaddress"),
      description: "",
      imagePreviewUrl: 'https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg',

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
          imagePreviewUrl: response.data[0][0].img,
          works: response.data[1]
        });

      });

  };

  uploadHandler = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    axios
      .post("http://localhost:5000/employee/principalpage/upload", data)
      .then((res) => {
        this.setState({
          imagePreviewUrl: `http://localhost:5000/${res.data.filename}`,
        });
        axios.post("http://localhost:5000/employee/principalpage/inserturl", [
          localStorage.getItem("id"),
          this.state.imagePreviewUrl,
        ]);
      });
  };

  render() {
    const { imagePreviewUrl,
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
                    <Nav.Link href="/hireemployee">Activity</Nav.Link>
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
                          <Form.Label> {this.state.address}</Form.Label>
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
                <div class="profile-img">
                  <img src={imagePreviewUrl} alt="" />
                  <div class="file btn btn-lg btn-primary">
                    Upload your photo
                    <input type="file" onChange={this.uploadHandler} />
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
