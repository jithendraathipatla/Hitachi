import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import firstSliderImage from '../images/website-banner.jpg';
import secondSliderImage from '../images/website-banner.jpg';
import thirdSliderImage from '../images/website-banner.jpg';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
    return (
        <div style={{marginTop:"50px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000} style={{height:"80vh", width:"auto"}}>
             <div data-src={firstSliderImage} alt="Adarsh Savana"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;