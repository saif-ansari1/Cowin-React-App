import React, {Component} from 'react';
import {Card,DropdownButton,Dropdown,CardGroup,Col,Carousel} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
class Cardcomp extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            {/* <CardGroup> */}
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="D:\reactjs\myapp\images\1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                {/* </CardGroup> */}
            </>
        );
    }
}

export default Cardcomp;