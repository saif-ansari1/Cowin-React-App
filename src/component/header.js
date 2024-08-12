import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        
        const numbers = ["Home", "About", "Contact", "login","Cowin"];
        const mydata = numbers.map((vals,index)=>
            <Link className="nav-link" to={vals}>{vals}</Link>

        )
        return (
            <>
                
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {mydata}
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </>
        );
    }
}

export default Header;