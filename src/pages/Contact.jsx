import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

import { Link } from 'react-router-dom';
class Contact extends Component {
	  constructor(props) {
      super(props);
	  
      this.onChangePersonName = this.onChangePersonName.bind(this);
      this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
      this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.deleteEmployee = this.deleteEmployee.bind(this);
      this.state = {
          person_name: '',
          business_name: '',
          business_gst_number:'',
		  business: [],
          isLoaded: false
      }
  }
  componentDidMount(){
      fetch('http://localhost:8080/projects/api/select.php')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    business: json
                })
            })
    }
    deleteEmployee(e) {
        axios.get('http://localhost:8080/projects/api/delete.php?id='+e)
            .then(res => console.log(res.data));
			
    //this.props.history.push('/contact');
    }
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:8080/projects/api/business_create.php', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
    this.props.history.push('/about');
  }
  render() {
	   var { isLoaded, business } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
    return (
      <div>
        <Navbar />
          <h3 align="center">Business List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Person</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
			{business.map(item => (
                        <tr key="{item.id}">
						<td>
                            {item.name}</td>
							<td>
            <Link to={"/edit/"+item.id} className="btn btn-primary">Edit</Link>
			<button onClick={this.deleteEmployee.bind(this,item.id)}  className="btn btn-danger">Delete</button>
          </td>
		  
                        </tr>
                    ))}
               <tr>
			   
         
          
         
        </tr>
            </tbody>
          </table>
        <div className="container">
          <h2>Send Message</h2>
        <div style={{ marginTop: 10 }}>
              <h3>Add New Business</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Person Name:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Business Name: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.business_name}
                        onChange={this.onChangeBusinessName}
                        />
                  </div>
                  <div className="form-group">
                      <label>GST Number: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.business_gst_number}
                        onChange={this.onChangeGstNumber}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Register Business" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
		   </div>
		   <Footer />
      </div>
    );
  }
}

export default Contact;
