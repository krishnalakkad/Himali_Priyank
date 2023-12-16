import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Multi() {

    return (
        <center className='multi'>
            <OwlCarousel className='owl-theme' items={1} loop="true" autoplay="true" autoplaySpeed="5000" slideTransition="linear ">
                <div class='item'>
                    <img src={require('./image/multi1.jpg')} alt="" />
                </div>
                <div class='item'>
                    <img src={require('./image/multi2.jpg')} alt="" />
                </div>
                <div class='item'>
                    <img src={require('./image/multi3.jpg')} alt="" />
                </div>
            </OwlCarousel>
        </center>
    )
}
export default Multi;