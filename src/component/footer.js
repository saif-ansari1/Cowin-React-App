import React, { Component } from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
class Footer extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        
        // const numbers = ["Home", "About", "Contact", "Login"];
        // const mydata = numbers.map((vals,index)=>
        //     <Nav.Link href="#" key={index}>{vals}</Nav.Link>
        // )
        return (
            <>
                
                <div class="jumbotron text-center">
                    <p>Sourav Christian</p>
                </div>
            </>
        );
    }
}

export default Footer;