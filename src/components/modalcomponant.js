import React, { useState } from "react"
import Modalabc from "react-responsive-modal"
import Form from "./Form"
import OfficialLogo from "../images/logo.png"
import Callusback from "../images/svg/call-back.svg"
import { FcCallback } from "react-icons/fc"
import { FaCar } from "react-icons/fa"
import { RiHandCoinLine } from "react-icons/Ri"
import { css } from "@emotion/core"


const Modal = props => {
  const [isopen, setisopen] = useState(props.display)
  return (
    <div className="finaltouch">
      <a onClick={() => setisopen(true)} className={props.class}>
        {props.title}
      </a>
      <Modalabc open={isopen} onClose={() => setisopen(false)}>
        <div style={{ textAlign: "center" }}>
          <img className="modalImageLogo" src={OfficialLogo} alt="Adarsh Savana" />
        </div>
        <div css={lastImprovement}>
          <div>
            <FcCallback />
            <FaCar />
            <RiHandCoinLine />
          </div>
          <div>
            <Form />
          </div>

          <br />
          <br />
          <div
            style={{
              width: "100%",
              background: "linear-gradient(101deg, #4450a8db, #000)",
              color: "white",
              textAlign: "center",
              padding: "10px 0px",
            }}
          >
            <a href="tel:7829333322">
              <img
                src={Callusback}
                style={{ maringLeft: "10px" }}
                alt="call back"
              />{" "}
              <span style={{ color: "white" }}>7829333322</span>
            </a>
          </div>
        </div>
      </Modalabc>
    </div>
  )
}

export default Modal

const lastImprovement = css`
  display: flex;
`
