import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router";
import swal from "sweetalert";
import {Link} from "react-router-dom";

class RecordsList extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.state ={
          redirect :false
        }
    }

    delete(){
      axios.get('http://localhost/reactcrud-app/delete.php?id='+this.props.obj.id)
      .then(
        this.setState({redirect :true})
      )
      swal("User Removed!", "", "success")
      .catch(err => console.log(err))
    }

  render() {
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to='/view'/>
    }
    return (
      <tr>
        <td>{this.props.obj.fullname}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.password}</td>
        <td>
          <Link to={"/Edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
export default RecordsList;
