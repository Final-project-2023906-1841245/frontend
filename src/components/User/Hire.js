import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import logo from "../../assets/logo1.png";
import Button from "react-bootstrap/Button";
import "./HireStyle.css";

export default class Hire extends Component {
    constructor() {
        super();
        this.state = {
            answer: false,
            date: null,
            servicename: localStorage.getItem("work"),
            description: "",
            paymentmethod: "",

        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        var date = this.state.date;
        var description = this.state.description;
        var paymentmethod = this.state.paymentmethod;

        var idemployee = localStorage.getItem("id");
        var iduser = localStorage.getItem("phone");

        axios
            .post("http://localhost:5000/user/hire", {
                employeeid: idemployee,
                userid: iduser,
                hiredate: date,
                servicedescription: description,
                paymentmethod: paymentmethod,
            })
            .then((response) => {
                this.setState({
                    answer: response.data,
                    submit: true,
                });
                console.log(response.data);
            });
    };
    render() {
        return (
            <div className="auth-wrapper1">
                <div className="auth-inner1">
                    <Form onSubmit={this.handleSubmit}>
                        <div className="overflow" style={{
                            marginLeft: 0,
                            marginTop: 0,
                        }}>

                            <br />
                            <Button color="success" href="/jobslist">
                                Back
                            </Button>
                            <br />

                        </div>

                        <img src={logo} className="logo" alt="logo" />

                        <h1
                            style={{
                                fontSize: 30,
                                fontWeight: 800,
                                color: "#124265",
                                textAlign: "center",
                                fontFamily: "sans-serif",
                            }}
                        >

                            Hire the {this.state.servicename} service
                        </h1>


                        <div className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Enter date"
                                onChange={(e) => {
                                    this.setState({ date: e.target.value });
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your description"
                                onChange={(e) => {
                                    this.setState({ description: e.target.value });
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Control
                                type="pay"
                                placeholder="Enter PaymentMethod"
                                onChange={(e) => {
                                    this.setState({ paymentmethod: e.target.value });
                                }}
                            />
                        </div>

                        <div className="d-grid">
                            <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-primary"
                            >
                                Hire
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>

        );
    }
}
