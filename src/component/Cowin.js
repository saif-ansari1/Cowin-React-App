import React, { Component } from 'react';
import Header from './header'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
import $ from "jquery";
import { withRouter } from "react-router-dom";

class Cowin extends Component {
    constructor(props){
        super(props)
        this.state={}
        // this.onChangeInp=this.onChangeInp.bind(this)
    }
    onChangeInp = (e)=>{
        // console.log(e);
        // console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
          });
    }
    onClick = (e)=>{
        let {pincode, date} = this.state
        let errors = {}

       
        // var
        // var a=$.datepicker.formatDate( "dd-mm-yy", new Date(date));
        var todaydate = new Date(date);  //pass val varible in Date(val)
        var dd = todaydate .getDate();
        var mm = todaydate .getMonth()+1; //January is 0!
        var yyyy = todaydate .getFullYear();
        if(dd<10){  dd='0'+dd } 
        if(mm<10){  mm='0'+mm } 
         date = dd+'-'+mm+'-'+yyyy;
        //  let logindata = JSON.stringify(this.state);
         let logindata = JSON.stringify({'pincode':pincode,'date':date});
         localStorage.setItem('cowindata', logindata);
        //  console.log();
      
        // fetch('http://localhost/php/api/registration?username='+this.state.fields.username)
        // fetch('https://justjay.000webhostapp.com/api/registration_react',requestOptions)
        // fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pincode+'&date='+date)
        // .then(res=>res.json())
        // .then((cowin)=>{
        //     console.log(cowin.sessions);
        //     // if (kaipan.Code === 1) {
                this.props.history.push("/List");
        //     // } else {
                
        //     // }
        // })
        // if (this.state.username !='') {
            
        // }else{

        // }
    }
    render() {
        return (
            <>
                <Header />
                <Container>
                    <Row className="mt-3">
                        <Col md={{ span: 4, offset: 4 }}>
                            <Card>
                                <Card.Header>
                                    Cowin
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <input type="text" className="form-control" onChange={this.onChangeInp} name="pincode" placeholder="Enter Pincode"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <input type="date" className="form-control" onChange={this.onChangeInp} name="date" placeholder="Enter Date"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="text-center">
                                            <input type="button" onClick={this.onClick} className="btn btn-primary" value="Get Data"></input>&nbsp;
                                            <input type="button" className="btn btn-danger" value="Cancel"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="text-center">
                                            {/* <Link className="nav-link" to="signup">Click here to registration</Link> */}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </>
        );
    }
}
export default withRouter(Cowin);