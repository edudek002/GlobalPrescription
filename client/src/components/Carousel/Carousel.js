import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "./carousel.css";

class DemoCarousel extends Component {
    render() {
        console.log("rending");
        return <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} dynamicHeight>
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
              <p className="legend">
                COMPARE PRESCRIPTIONS INGREDIENTS
              </p>
            </div>
          </Carousel>;
    }
};


export default DemoCarousel;