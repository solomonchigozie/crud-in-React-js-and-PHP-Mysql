import React, { Component } from "react";
import axios from "axios";
import RecordsList from "./RecordsList";
// import ProductList from "./ProductList";

const API_PATH = "http://localhost/reactcrud-app/fetch.php";

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }
  componentDidMount() {
    axios
      .get(`${API_PATH}`)
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  usersList() {
    return this.state.students.map(function (object, i) {
      return <RecordsList obj={object} key={i}></RecordsList>;
    });
  }

  render() {
    return (
      <div className="container">
        <h3 align="center">Users </h3>
        <table className="table table-stripped" style={{marginTop: 30}}>
          <thead>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th colSpan="2">Action</th>
          </thead>
          <tbody>{this.usersList()}</tbody>
        </table>
      </div>
    );
  }
}
