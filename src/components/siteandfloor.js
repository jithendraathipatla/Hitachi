import React from "react"
import { css } from "@emotion/core"
import TitleComponent from "./titlecomponent"
import LightBoxComponant from "../components/lightbox"
import MasterPlanImage from "../images/prestige-waterford-masterplan.jpg"
import FloorplanImage from "../images/4bhk.webp"

const SiteAndFloor = () => {
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
        <div>
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient"> <h5>3 BHK</h5> </div>
        </div>

        <div>
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient"> <h5>3 BHK Premium</h5> </div>
        </div>
        <div>
          <img src={FloorplanImage} alt="floorPlan" />
          <div class="effetGradient"> <h5>4 BHK</h5> </div>
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
  grid-gap:10px;
  padding: 40px 200px;
  div{
    border: 1px solid #dee2e6;
    width: fit-content;
    h5{
      padding:15px 0px;
      color: white;
      font-size:20px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
  img{
    opacity:40%;
  }
`
