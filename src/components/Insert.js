import React, { Component } from "react";

export default class Insert extends Component {
 constructor(props){
   super(props);
   this.state = {
     fname : '',
     email : '',
     password : '',
   }
 }
 handleFormSubmit(event){
   event.preventDefault();
   console.log(this.state);
 }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h4 className="text-center text-danger">Insert Your Details</h4>
        <div className="row">
          <form className="col-md-4 offset-4">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.fname}
                name="full_name"
                onChange={e=>this.setState({fname : e.target.value})}
              ></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                value={this.state.email}
                className="form-control"
                onChange={e=>this.setState({email : e.target.value})}
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={this.state.password}
                className="form-control"
                onChange={e=>this.setState({password : e.target.value})}
              ></input>
            </div>
            <div>
              <input
                type="submit"
                value="Register User"
                className="btn btn-danger"
                onClick={e=>this.handleFormSubmit(e)}
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
