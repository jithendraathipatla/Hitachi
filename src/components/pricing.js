import React,{useState} from 'react';
import Configirationcomponant from '../components/configurationcomponant';
import {css} from '@emotion/core'
import CostDetails from '../images/costing-details.jpg'
import Modal from "./modal"

const Pricing = () => {
    const [isShown2, setIsShown2] = useState(false)
    const displayingImage = () => {
        return (
          <div css={Two}>
            <Modal title="Complete BreakUp" class="modalbuttonsmall" />
          </div>
        )
      }
    return(
        <div css={maingrid}>
           <div css={mobileimage}>
            <Configirationcomponant/>
           </div>
           <div onMouseEnter={() => setIsShown2(true)}
             onMouseLeave={() => setIsShown2(false)} css={one}>
                 <div >
                 <img src={CostDetails}/>
                 {isShown2 == false ? null : displayingImage()}
                 </div>
               <div css={last}>
               <h5>Costing Details</h5>
               </div>
              
               
           </div>
           
        </div>
    )
}

export default Pricing;

const last = css`
font-size: 20px;
color: white;
background: rgb(168, 137, 68);
text-align: center;
margin-top: -6px;
padding: 10px;
`

const Two = css`
  position: absolute;
  top: 38%;
  left: 33%;
`
const one = css`
position: relative;
`

const maingrid = css`
 display: grid;
 grid-template-columns: 10fr 2fr;
 padding:40px;
 grid-gap:30px;
 @media(max-width:600px){
   display:block;
   padding: 15px;
   img{
    width: -webkit-fill-available;
   }
 }
`
const mobileimage = css`
 @media(max-width:600px){
   margin-bottom:30px;
 }
`