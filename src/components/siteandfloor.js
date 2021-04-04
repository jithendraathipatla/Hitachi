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
    <div style={{position:"relative"}}>
      <TitleComponent title="Waterford MasterPlan" />
      <div css={image}>
        <LightBoxComponant
          images={[MasterPlanImage]}
          state={masterplan}
          css1={"nogrid"}
        />
      </div>
      <br />
      <TitleComponent title="Floor Plans" />

      <div css={floor}>
        <div
          css={jaj}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>3 BHK</h5> {isShown == false ? null : displayingImage()}
          </div>
        </div>

        <div
          css={jaj}
          onMouseEnter={() => setIsShown1(true)}
          onMouseLeave={() => setIsShown1(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>3 BHK Premium</h5>{" "}
            {isShown1 == false ? null : displayingImage()}
          </div>
        </div>
        <div
          css={jaj}
          onMouseEnter={() => setIsShown2(true)}
          onMouseLeave={() => setIsShown2(false)}
        >
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient">
            {" "}
            <h5>4 BHK</h5> {isShown2 == false ? null : displayingImage()}
          </div>
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
  display: flex;
  padding: 40px 5%;
  justify-content: space-between;
    h5 {
      padding: 15px 0px;
      color: white;
      font-size: 20px;
      font-weight: 500;
      line-height: 1.2;
  img {
    opacity: 40%;
  }
  @media(max-width:600px){
    display:block;
   padding:20px;
  }
`

const Two = css`
  position: absolute;
  top: -200%;
  left: 35%;
`
const jaj = css`
  border: 1px solid #eeee;
  border-radius: 2px;
  box-shadow: 0px 0px 11px 1px rgb(0 0 0 / 25%);
  img{
    opacity:40%;
  }
  :hover{
    transform: translateY(-0.5px);
    cursor:pointer;
  }
`
