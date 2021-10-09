import React from "react"
import { css } from "@emotion/core"
import {MdOutlineMail} from 'react-icons/md'
import {FiPhone} from 'react-icons/fi'
import {AiTwotoneBoxPlot} from 'react-icons/ai'
import Modal from "./modal"

const FixedFooter = () => {
  return (
    <div css={footerFixed}>
       <div><MdOutlineMail/><Modal title="Enquire Now"/></div>
       <div><FiPhone/><Modal title="Talk To Our Property Advisor"/></div>
       <div><AiTwotoneBoxPlot/><Modal title="Organise Site Visit"/></div>
    </div>
  )
}

export default FixedFooter

const footerFixed = css`
    position: fixed !important;
    transition: all .15s ease-in-out;
    transform-origin: left top;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 0.1rem;
    z-index: 100;
    box-shadow: 0 1px 4px 1px rgb(0 0 0 / 23%);
    background: #fff;
    display:flex;
    justify-content: space-around;
    background: #434FA8;
    border-radius:5px;
    border-top-right-radius:10px;
    border-bottom-left-radius:0px;
    color: white;
    font-size: 18px;
    :target{
        transform: scaleY(1);
    }
    div{
        margin: 11px 0px;
        padding: 0px 156px;
        border-right: 1px solid white;
        text-align: center;
        svg{
            margin: -3px 7px;
            font-size:20px;
        }
        div{
            padding: 10px 0px;
            display: contents;
            border-left: 6px solid green;
        }
    }
}
`
