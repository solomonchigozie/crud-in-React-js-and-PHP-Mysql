import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

const API_PATH = "http://localhost/reactcrud-app/insert.php";
export default class Insert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      password: "",
    };
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    const obj = this.state;

     axios.post(`${API_PATH}`,obj)
     .then(res=>console.log(res.data));
     console.log(obj);
     swal("Good job!", "User added", "success");
     
    // axios({
    //   method: "post",
    //   url: `${API_PATH}`,
    //   headers: { "content-type": "application/json" },
    //   data: obj,
    // })
      // .then((result) => {
      //   this.setState({
      //     sent: result.data.sent,
      //   });
      // })
      // .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: 10 }}>
          <h4 className="text-center text-danger">Insert Your Details</h4>
          <div className="row">
            <form className="col-md-4 offset-md-4">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fname}
                  name="full_name"
                  onChange={(e) => this.setState({ fname: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email" 
                  type="email"
                  value={this.state.email}
                  className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  className="form-control"
                  onChange={(e) => this.setState({ password: e.target.value })}
                ></input>
              </div>
              <div>
                <input
                  type="submit"
                  value="Register User"
                  className="btn btn-danger"
                  onClick={(e) => this.handleFormSubmit(e)}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
