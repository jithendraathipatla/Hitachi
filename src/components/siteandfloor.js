import React, { useState } from "react"
import { css } from "@emotion/core"
import TitleComponent from "./titlecomponent"
import LightBoxComponant from "../components/lightbox"
import MasterPlanImage from "../images/prestige-waterford-masterplan.jpg"
import FloorplanImage from "../images/4bhk.webp"
import Modal from "./modal"

const SiteAndFloor = () => {
  const [isShown, setIsShown] = useState(false)
  const [isShown1, setIsShown1] = useState(false)
  const [isShown2, setIsShown2] = useState(false)

  const displayingImage = () => {
    return (
      <div css={Two}>
        <Modal title="Know More" class="modalbuttonsmall" />
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
    <div>
      <TitleComponent title="Waterford MasterPlan" />
      <div css={image}>
        <LightBoxComponant
          images={[MasterPlanImage]}
          state={masterplan}
          css1={"nogrid"}
        />
      </div>

      <TitleComponent title="Floor Plans" />

      <div css={floor}>
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>3 BHK</h5>{" "}
          </div>
          {isShown == false ? null : displayingImage()}
        </div>

        <div
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>3 BHK Premium</h5> 
          </div>
          {isShown1 == false ? null : displayingImage()}
        </div>
        <div
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>4 BHK</h5>
          </div>
          {isShown2 == false ? null : displayingImage()}
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
  grid-gap: 10px;
  padding: 40px 200px;
  div {
    border: 1px solid #dee2e6;
    width: fit-content;
    h5 {
      padding: 15px 0px;
      color: white;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  img {
    opacity: 40%;
  }
`

const Two = css`
  position: relative;
  top: -58%;
  left: 36%;
`
