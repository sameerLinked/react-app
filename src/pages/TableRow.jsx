import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class TableRow extends Component {
	
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
         
          <td>
            <Link to={"/edit/"+this.props.obj.employee_id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;