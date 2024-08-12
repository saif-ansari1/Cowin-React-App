import React, { Component } from 'react';
import Header from './header'
import { Row, Col, Container, Card,Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";

class List extends Component {
    

    constructor(props) {
        super(props)
        this.state = {
            data:[]
        }
        // this.onChangeInp=this.onChangeInp.bind(this)
    }
    componentDidMount(){
        this.renderlisting();
        this.timerID = setInterval(
            () => this.renderlisting(),
            5000
          );
           
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
      }

    renderlisting() {
        console.log("Called");
        let cowindata = JSON.parse(localStorage.getItem("cowindata"));
         fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+cowindata.pincode+'&date='+cowindata.date)
        .then(res=>res.json())
        .then((cowin)=>{
            console.log(cowin.sessions);
        this.setState({data:cowin.sessions});

            })
    }
   
    render() {
       
        return (
            <>
                <Header />
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Vaccine</th>
                    <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((value,index)=><Vaccinedata key={index} name={value.name} address={value.address} vaccine={value.vaccine} available={value.available_capacity}/>)}
                </tbody>
                </Table>
            </>
        );
    }
    
}

class Vaccinedata extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.address}</td>
                <td>{this.props.vaccine}</td>
                <td>{this.props.available}</td>
            </tr>
        )
    }
}
export default withRouter(List);