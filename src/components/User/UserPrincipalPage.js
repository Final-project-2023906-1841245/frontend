import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./PrincipalPageStyle.css";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../assets/logote.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default class UserPrincipalPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      description: "",
      imagePreviewUrl: "https://c.neh.tw/thumb/f/720/comvecteezy377227.jpg",
      availableWorks: [],
      search: "",
    };
  }

  componentDidMount = () => {
    var phone_data = localStorage.getItem("phone");
    axios
      .post("http://localhost:5000/user/principalpage", { phone: phone_data })
      .then((response) => {
        console.log(response.data);
        this.setState({ name: response.data[0].user_name });
        this.setState({ email: response.data[0].email });
        this.setState({ description: response.data[0].user_description });
        this.setState({ imagePreviewUrl: response.data[0].img });
      });
    axios
      .get("http://localhost:5000/user/principalpage/jobslist")
      .then((response) => {
        this.setState({ availableWorks: response.data });
      });
  };

  handleClick = async (e) => {
    var coincidence = false;
    for (let i = 0; i < this.state.availableWorks.length; i++) {
      if (this.state.search == this.state.availableWorks[i].work_name) {
        coincidence = true;
        localStorage.setItem("work", this.state.search);
        this.props.history.push("/jobslist");
      }
    }
    if (!coincidence) {
      alert("Please enter a valid work name");
    }
  };
  uploadHandler = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);
    axios
      .post("http://localhost:5000/user/principalpage/upload", data)
      .then((res) => {
        this.setState({
          imagePreviewUrl: `http://localhost:5000/${res.data.filename}`,
        });
        axios.post("http://localhost:5000/user/principalpage/inserturl", [
          localStorage.getItem("phone"),
          this.state.imagePreviewUrl,
        ]);
      });
  };

  render() {
    const { imagePreviewUrl } = this.state;

    return (
      <div className="auth-wrapper-ja">
        <div className="auth-inner-ja">
          <Form>
            <Row>
              <Col md={{ span: 1, offset: 0 }}>
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
              </Col>

              <Col md={{ span: 9, offset: 2 }}>
                <Nav
                  className="justify-content-end"
                  activeKey="/home"
                  fill="true"
                >
                  <Nav.Item>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => {
                          this.setState({ search: e.target.value });
                        }}
                      />
                      <Button
                        variant="primary"
                        className="btn btn-primary"
                        onClick={this.handleClick}
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
              <Col md={{ span: 4, offset: 3 }}>
                <div class="profile-head">
                  <h5>{this.state.name}</h5>
                  <h6>{this.state.description}</h6>
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

            <Row>
              <Col md={{ span: 4, offset: 3 }}>
                <div class="row">
                  <div class="col-md-6">
                    <Form.Label className="data">User ID</Form.Label>
                  </div>
                  <div class="col-md-6">
                    <Form.Label>{localStorage.getItem("phone")}</Form.Label>
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
