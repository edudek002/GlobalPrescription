import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";

class DemoCarousel extends Component {
    render() {
        console.log("rending");
        return (
            <Carousel>
                <div>
                    <img src="images/pill2.jpg" />
                    {/* <H1 className="legend">THIS IS A TEST</H1> */}
                    <p className="legend">GET PRESCRIPTIONS ON THE GO</p>
                </div>
                <div>
                    <img src="images/pill3.jpg" />
                    <p className="legend">TRAVEL WORRY FREE</p>
                </div>
                <div>
                    <img src="images/pills.jpg" />
                    <p className="legend">COMPARE PRESCRIPTIONS FROM ANY CORNER OF THE WORLD</p>
                </div>
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;