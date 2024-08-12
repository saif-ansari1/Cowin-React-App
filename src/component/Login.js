import React, { Component } from 'react';
import Header from './header'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from "react-router-dom";
class Login extends Component {
    constructor(props){
        super(props)
        this.state={}
        // this.onChangeInp=this.onChangeInp.bind(this)
    }
    onChangeInp = (e)=>{
        // console.log(e);
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
          });
    }
    // onClick = (e)=>{
    //     // console.log(e);
    //     console.log(e.target);
    //     this.setState({
    //         [e.target.name]: e.target.value
    //       });
    // }
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
                                            <input type="text" className="form-control" onChange={this.onChangeInp} name="username" placeholder="Enter user name"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col>
                                            <input type="text" className="form-control" onChange={this.onChangeInp} name="password" placeholder="Enter user name"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="text-center">
                                            <input type="button" className="btn btn-primary" value="Login"></input>&nbsp;
                                            <input type="button" className="btn btn-danger" value="Cancel"></input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">
                                        <Col className="text-center">
                                            <Link className="nav-link" to="signup">Click here to registration</Link>
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
export default Login;