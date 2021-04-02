import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import firstSliderImage from '../images/banner1.webp';
import secondSliderImage from '../images/banner2.webp';
import thirdSliderImage from '../images/banner3.webp';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
    return (
        <div style={{marginTop:"50px"}}>
           <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000} style={{height:"80vh", width:"auto"}}>
             <div data-src={firstSliderImage} alt="Prestige Waterford banner1"/>
             <div data-src={secondSliderImage} alt="Prestige Waterford banner2"/>
             <div data-src={thirdSliderImage} alt="Prestige Waterford banner3"/>
            </AutoplaySlider> 
        </div>
    );
};

export default Slider;