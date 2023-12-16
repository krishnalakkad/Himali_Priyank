import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {

    return (
        <>
            <div className='slider'>
                <Carousel className='slider_img' infiniteLoop={true} autoPlay={true} interval={3000}>
                    <div>
                        <img src={require('./image/slider1.jpg')} alt="" ></img>
                    </div>
                    <div>
                        <img src={require('./image/slider2.jpg')} alt=""></img>
                    </div>
                    <div>
                        <img src={require('./image/slider3.jpg')} alt=""></img>
                    </div>
                </Carousel>
            </div>

        </>
    )
}


export default Slider