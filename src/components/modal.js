import React, { useState } from "react"
import Modalabc from "react-responsive-modal"
import "react-responsive-modal/styles.css"
import Form from "./Form"
import "./layout.css"
import OfficialLogo from "../images/svg/logo.svg"
import { FiPhoneCall } from "react-icons/fi"
import { FaCar } from "react-icons/fa"
import { RiHandCoinLine } from "react-icons/ri"
import Callusback from "../images/svg/call-back.svg"
import {css} from '@emotion/core'
import TitleComponent from './titlecomponent'

const Modal = props => {
  const [isopen, setisopen] = useState(false)
  return (
    <div className="finaltouch">
      <a onClick={() => setisopen(true)} className={props.class}>
        {props.title}
      </a>
      <Modalabc open={isopen} onClose={() => setisopen(false)}>
        
        <div style={{ display:"flex" }}>
          <div css={one}>
          <div style={{ textAlign: "center" }}>
           <TitleComponent title="We Promise"/>
          </div>
            <span><FiPhoneCall /><br/> Get Instant CallBack</span> 
           <span><FaCar /><br/> Free Site visit</span> 
            <span><RiHandCoinLine /><br/>Unmatched Prices</span>
          </div>
          <div css={two}>
          <div style={{ textAlign: "center" }}>
          <img className="modalImageLogo" src={OfficialLogo} alt="Marq 2.0" />
          </div>
            <Form />
          </div>
        </div>
        <br />
        <br />
        <div
          style={{
            width: "100%",
            background: "linear-gradient(101deg, #d4af37, #000)",
            color: "white",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          <a href="tel:7829333322" style={{ textDecoration: "none"}}>
            <img src={Callusback} style={{ maringLeft: "10px" }} />{" "}
            <span style={{ color: "white" }}>7829333322</span>
          </a>
        </div>
      </Modalabc>
    </div>
  )
}

export default Modal

const one = css`
background: #eeee;
@media(max-width:600px){
  display:none;
}
span{
  display: block;
  color: #977729;
  font-size: 1.2vw;
  text-align: center;
  padding-bottom: 25px;
  line-hieght:0.3px;
  background: #eeee;
  padding: 14px;
  svg{
    color:#977729;
    display: inline-block;
    font-size: 3vw;
  }
 
}
h4{
  display: block;
  text-align: center;
  font-size: 1.2vw;
  font-weight: 600;
  padding: .4vw 0 .1vw;
  color:#977729 !important;
  padding-bottom:30px;
}

`
const two = css`
 padding:10px 20px;
`