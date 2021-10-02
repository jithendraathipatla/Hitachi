import React, { useState } from "react"
import TitleComponent from "./titlecomponent"
import "./layout.css"
import TabContainer from "./tabs"
import LightHouseabc from "./lightbox"

import NightFirst from "../images/outdoor1.jpg"
import NightSecond from "../images/outdoor2.jpg"


import InteriorOne from "../images/outdoor3.jpg"
import InteriorTwo from "../images/outdoor4.jpg"
import InteriorThree from "../images/outdoor5.jpg"
import InteriorFour from "../images/outdoor6.jpg"

const Gallery = () => {
  const interior = [
    {
      name: "View One",
      image: InteriorOne,
    },
    {
      name: "View Two",
      image: InteriorTwo,
    },
    {
      name: "View Three",
      image: InteriorThree,
    },
    {
      name: "View Four",
      image: InteriorFour,
    },
  ]

  const exterior = [
    {
      name: "Exterior View",
      image: NightFirst,
    },
    {
      name: "Exterior View",
      image: NightSecond,
    },
  ]

  // const [masterplan, setmasterplan] = useState([
  //     {
  //         name:"Master Plan Hyde",
  //         image:MasterPlanabcd
  //     },

  // ]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <br />
        <div className="galleryImages">
          <div>
            <TabContainer
              title1="Day View"
              title2="Night View"
              interior={
                <LightHouseabc
                  images={[
                    InteriorOne,
                    InteriorTwo,
                    InteriorThree,
                    InteriorFour,
                  ]}
                  state={interior}
                />
              }
              exterior={
                <LightHouseabc
                  images={[
                    NightFirst,
                    NightSecond,
                  ]}
                  state={exterior}
                />
              }
              
              mplan="Please Check other Sections"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
