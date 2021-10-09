import React,{useState} from 'react';
import Title from './titlecomponent';
import Swimming from '../images/amensvg/swimming-pool.svg';
import Club from '../images/amensvg/house.svg';
import Child from '../images/amensvg/player.svg';
import Landscape from '../images/amensvg/sprout.svg';
import Secur from '../images/amensvg/royal-guard.svg';
import Bank from '../images/amensvg/atm.svg';
import Basket from '../images/amensvg/basketball.svg';
import Caft from '../images/amensvg/coffee.svg';
import Conven from '../images/amensvg/pet-shop.svg';
import Jogging from '../images/amensvg/race-track.svg';
import Lands from '../images/amensvg/path.svg';
import Meditation from '../images/amensvg/meditation.svg';
import Convention from '../images/amensvg/hall.svg';
import Piped from '../images/amensvg/valve.svg';
import Power from '../images/amensvg/battery.svg';
import Tennis from '../images/amensvg/tennis-court.svg';
import Wifi from '../images/amensvg/wifi.svg';
import {css} from '@emotion/core';


const Amenities = () => {
    const [state, setstate] = useState([{
        name:"Swimming Pool",
        img:Swimming,
    },
    {
        name:"Club House",
        img:Club,
    },
    {
        name:"Kid's Playing Area",
        img:Child,
    },
    {
        name:"Landscaped Garden",
        img:Landscape,
    },
    {
        name:"24/7 Security",
        img:Secur,
    },
    {
        name:"Basketball Court",
        img:Basket,
    },
    {
        name:"Convenience Store",
        img:Conven,
    },
    {
        name:"Jogging Track",
        img:Jogging,
    },
    {
        name:"Landscape",
        img:Lands,
    },
    {
        name:"Meditaion",
        img:Meditation,
    },
    {
        name:"Power Backup",
        img:Power,
    },
    {
        name:"Tennis Court",
        img:Tennis,
    },
    ]);

    const displayingAmenities = () => {
        return state.map((item,i)=>{
            return(
                <div key={i} css={now} >
                   <img src={item.img} alt={item.name} width="50px"/>
                   <h1>{item.name}</h1>
                </div>
            )
        })
    }
    return (
        <div>
            <div style={{textAlign:"center"}}>
                <Title title="Savana Amenities"/>
            </div>
            <div className="Amenities_main">
            {displayingAmenities()}
            </div>
        </div>
    );
};

export default Amenities;

const now = css`
box-shadow: 1px 1px 25px #e0e0e0;
text-align: center;
padding: 30px 10px;
 :hover{
    border: 1px solid green;
    cursor: pointer;
 }
`