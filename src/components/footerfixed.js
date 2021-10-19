import React, { useState, useEffect } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiTwotoneBoxPlot } from "react-icons/ai";
import { css } from "@emotion/core";
import ModalComponent from "./modal";

const FixedFooter = () => {
  const [State, setState] = useState(0);

  useEffect(() => {
    setState(window.innerWidth);
  }, [State]);

  const desktopView = () => {
    return (
      <>
        <div>
          <MdOutlineMail /> <ModalComponent title="Enquire Now" />
        </div>
        <div>
          <FiPhone /> <ModalComponent title="Talk To Our Advisor" />
        </div>
        <div>
          <AiTwotoneBoxPlot /> <ModalComponent title="Organise Site Visit" />
        </div>
      </>
    );
  };

  const mobileView = () => {
    return (
      <span css={mobile}>
        <div>
          <MdOutlineMail /> <ModalComponent title="Enquire" />
        </div>
        <div>
          <FiPhone />
          <a href="tel:+917829333322">Call</a>
        </div>
        <div>
          <FaWhatsapp /> <a href="https://wa.me/<+917829333322>">whatsapp</a>
        </div>
      </span>
    );
  };
  return (
    <div css={footerFixed}>{State > 600 ? desktopView() : mobileView()}</div>
  );
};

export default FixedFooter;

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
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    justify-content: space-around;
    background: #434FA8;
    border-radius:5px;
    border-top-right-radius:10px;
    border-bottom-left-radius:0px;
    color: white;
    font-size: 18px;
    letter-spacing: 0.020vw;
    @media(max-width:600px){
      display:block;
    }
    :target{
        transform: scaleY(1);
    }
    div{
        margin: 11px 0px;
        padding: 0px 100px;
        border-right: 1px solid white;
        text-align: center;
        @media(max-width:600px){
          padding: 0px 10px;
          font-size:14px;
          :nth-child(3){
            border-right: none;
          }
        }
        svg{
            margin: -3px 7px;
            font-size:20px;
            @media(max-width:600px){
              margin: 3px 7px;
              font-size:14px;
            }
        }
        div{
            padding: 10px 0px;
            display: contents;
            border-left: 6px solid green;
        }
    }
}
`;

const mobile = css`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  div {
    padding: 0px 10px;
    display: flex;
    justify-content: center;
    a{
      color:white;
      text-decoration:none;
      :hover{

      }
    }
  }
`;