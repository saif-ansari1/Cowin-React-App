import React, { Component } from 'react';
import Header from './header'
import { Row, Col, Container, Card } from 'react-bootstrap'
class Registration extends Component {
    constructor(props){
        super(props)
        this.state={
            fields:{},
            errors:{}
        }
        // this.onChangeInp=this.onChangeInp.bind(this)
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid  = true;

        console.log(fields.password.length);
        if(!fields['username']){
            errors['username'] = "can not be blank";
            formIsValid = false;
        } else if(!fields['username'].match(/^[a-zA-Z]+$/)){
            errors['username'] = "Only letters";
            formIsValid = false;
        }
        if(!fields['email']) {
            errors['email'] = "E-mail cannot be blank";
            formIsValid = false;
        } else if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        } 
        // if(!fields['password']) {
        //     errors['password'] = "Password field cannot be blank";
        //     formIsValid = false;
        // }
        if(fields['password'].length < 8) {
            console.log('dsc');
            errors['password'] = "passowrd should be greater than 8 character";
            formIsValid = false;
        } 
        if(!fields['mobile']) {
            errors['mobile'] = "Mobile field cannot be blank";
            formIsValid = false;
        } else if(fields['mobile'].length < 10) {
            errors['mobile'] = "passowrd should be greater than 10 character";
            formIsValid = false;
        } 
        this.setState({errors: errors});
        return formIsValid;
    }

    setStatevalue(field,e){
        let fields = this.state.fields;
        // console.log(fields);
        fields[field] = e.target.value;
        this.setState({fields})
    }

    onClick = (e)=>{
        // alert('fdf');
        let fields = this.state.fields
        let errors = {}
        // console.log(fields);
        if (!fields["password"]) {
            errors["password"] = "Required!!"
        }
        this.setState({errors: errors});
        // console.log(fields);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ allData: fields })
        };
        // fetch('http://localhost/php/api/registration?username='+this.state.fields.username)
        // fetch('https://justjay.000webhostapp.com/api/registration_react',requestOptions)
        fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=382210&date=03-07-2021')
        .then(res=>res.json())
        .then((kaipan)=>{
            console.log(kaipan.sessions);
            if (kaipan.Code === 1) {
                this.props.history.push("/login");
            } else {
                
            }
        })
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
                                    Login
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <input type="text" className="form-control" onChange={this.setStatevalue.bind(this,'username')} name="username" placeholder="Enter Username"></input>
                                        </Col>
                                        <Col>
                                    <span style={{color: "red"}}>{this.state.errors.username}</span>
                                    </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <input type="password" className="form-control" onChange={this.setStatevalue.bind(this,'password')} name="password" placeholder="Enter Password"></input>
                                        </Col>
                                    <span style={{color: "red"}}>{this.state.errors.password}</span>

                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <input type="text" className="form-control" onChange={this.setStatevalue.bind(this,'email')} name="email" placeholder="Enter Email"></input>
                                        </Col>
                                    <span style={{color: "red"}}>{this.state.errors.email}</span>

                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <input type="text" className="form-control" onChange={this.setStatevalue.bind(this,'mobile')} name="mobile" placeholder="Enter Mobile Number"></input>
                                        </Col>
                                    <span style={{color: "red"}}>{this.state.errors.mobile}</span>

                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="text-center">
                                            <input type="button" onClick={this.onClick} className="btn btn-primary" value="Login"></input>&nbsp;
                                            <input type="button"  className="btn btn-danger" value="Cancel"></input>
                                        </Col>
                                        {/* { JSON.stringify(this.state) } */}
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
export default Registration;