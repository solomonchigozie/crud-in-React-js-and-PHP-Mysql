import React, {Component} from "react";
import axios from "axios";
import swal from "sweetalert";
import {Redirect} from "react-router-dom";

export default class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = {
          fname: "",
          email: "",
          password: "",
          redirect:false
        };
      }

      componentDidMount(){
          axios.get("http://localhost/reactcrud-app/edit.php?id="+this.props.match.params.id)
            .then(response => {
                this.setState({
                    fname : response.data.fullname,
                    email :response.data.email,
                    password : response.data.password
                });
            })
            .catch(function(error){
                console.log(error);
            })
      }


      handleFormSubmit(event) {
        event.preventDefault();
        const obj = this.state;
    
        axios.post("http://localhost/reactcrud-app/update.php?id="+this.props.match.params.id, obj)
        .then(res=>console.log(res.data));
         console.log(obj);
         swal("Good job!", "User Updated", "success");
         this.setState({redirect : true})
      }
    render() {
        const {redirect} = this.state;
        if(redirect){
        return <Redirect to='/view'/>
        }

        return (
          <div className="container">
            <div style={{ marginTop: 10 }}>
              <h4 className="text-center text-danger">Edit User Details</h4>
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
                      value="Update User"
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