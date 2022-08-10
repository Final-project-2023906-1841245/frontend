import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Table, Button, Container } from "react-bootstrap";
const data = [
  { id: 1, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  {
    id: 5,
    personaje: "Edward Elric",
    anime: "Fullmetal Alchemist: Brotherhood",
  },
  { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

export default class Jobslist extends React.Component {
  state = {
    data: data,
  };
  componentDidMount = () => {
    var phone = localStorage.getItem("phone");
    var work = localStorage.getItem("work");

    axios
      .post("http://localhost:5000/user/getworkers", {
        phone: phone,
        work_name: work,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      });
  };

  render() {
    return (
      <>
        <Container style={{ background: "white", backgroundImage: "none" }}>
          <br />
          <Button color="success" href="/userprincipalpage">
            Back to home
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Work</th>
                <th>Price per hour</th>
                <th>Distance(km)</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr>
                  <td>{dato.employee_name}</td>
                  <td>{dato.work_name}</td>
                  <td>{dato.price}</td>
                  <td>{Math.round(dato.distance / 1000)}</td>
                  <td>
                    <Button color="primary">Contratar</Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
