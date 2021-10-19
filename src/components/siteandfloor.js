import React, { useState } from "react"
import { css } from "@emotion/core"
import TitleComponent from "./titlecomponent"
import LightBoxComponant from "../components/lightbox"
import MasterPlanImage from "../images/masterplan.jpg"
import FloorplanImage from "../images/diamond.jpeg"
import FloorplanImage1 from "../images/ruby.jpeg"
import FloorplanImage2 from "../images/sapphire.jpeg"

import Modal from "./modal"

const SiteAndFloor = () => {
  const [isShown, setIsShown] = useState(false)
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)

  const displayingImage = () => {
    return (
      <div css={Two}>
        <Modal title="VIEW" class="modalbuttonsmall" />
      </div>
    )
  }
  const masterplan = [
    {
      name: "",
      image: MasterPlanImage,
    },
  ]

  return (
    <div style={{ position: "relative" }}>
      <TitleComponent title="Savana MasterPlan" />
      <div css={image}>
        <LightBoxComponant
          images={[MasterPlanImage]}
          state={masterplan}
          css1={"nogrid"}
        />
      </div>
      <br />
      <TitleComponent title="Plot Dimensions" />

      <div css={floor}>
        <div className="OverlayContainer">
          <img src={FloorplanImage} alt="floorPlan" />
          <div className="overlay"></div>
          <div className="overlay">
            <Modal title="VIEW" class="overlayfinal" />
          </div>
          <h5 className="prestigecopyabcd">Sapphire</h5>{" "}
        </div>

        <div className="OverlayContainer">
          <img src={FloorplanImage1} alt="floorPlan" />
          <div className="overlay"></div>
          <div className="overlay1">
            <Modal title="VIEW" class="overlayfinal" />
          </div>
          <h5 className="prestigecopyabcd">Ruby</h5>{" "}
        </div>
        <div className="OverlayContainer">
          <img src={FloorplanImage2} alt="floorPlan" />
          <div className="overlay"></div>
          <div className="overlay">
            <Modal title="VIEW" class="overlayfinal" />
          </div>
          <h5 className="prestigecopyabcd">Sapphire</h5>{" "}
        </div>
      </div>
    </div>
  )
}

export default SiteAndFloor

const image = css`
  text-align: center;
`
const floor = css`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  padding: 40px 5%;
  grid-gap:0 30px;
  justify-content: space-between;
  @media(max-width:600px){
    display:block;
   }
    h5 {
      padding: 15px 0px;
      color: white;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
    }
`

const Two = css`
  position: absolute;
  top: -200%;
  left: 0%;
  bottom: -100%;
  z-index: 98;
  width: 100%;
  height: 100%;
`
