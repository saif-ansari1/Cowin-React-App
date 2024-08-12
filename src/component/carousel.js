import React, { Component } from 'react';
import { Carousel} from 'react-bootstrap'
class CarouselClass extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const images=["boat.png","pool.png","fruits.png","arctichare.png"];

        console.log(this.props);
       
        // console.log(myimage);
        return (

            <>

                <Carousel>
            {images.map((vals,index)=>
                    <Carousel.Item>
                        <img 
                               style={{width: '500px',height: '800px'}}
                            className="d-block w-100"
                            src={'https://homepages.cae.wisc.edu/~ece533/images/'+vals}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>My Sliders</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
            )}
                </Carousel>
            </>

        );
    }
}

export default CarouselClass;