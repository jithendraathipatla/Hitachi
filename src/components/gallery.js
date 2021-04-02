import React, { useState } from "react"
import TitleComponent from "./titlecomponent"
import "./layout.css"
import TabContainer from "./tabs"
import LightHouseabc from "./lightbox"
import ExteriorFirst from "../Images/banner1.webp"
import ExteriorSecond from "../Images/banner2.webp"
import ExteriorThird from "../Images/banner3.webp"

import InteriorOne from "../Images/g1.jpg"
import InteriorTwo from "../Images/g2.jpg"
import InteriorThree from "../Images/g3.jpg"
import InteriorFour from "../Images/g4.jpg"

const Gallery = () => {
  const interior = [
    {
      name: "Balcony View",
      image: InteriorOne,
    },
    {
      name: "Dining Hall",
      image: InteriorTwo,
    },
    {
      name: "Hall",
      image: InteriorThree,
    },
    {
      name: "Bed Room",
      image: InteriorFour,
    },
  ]

  const exterior = [
    {
      name: "Exterior View",
      image: ExteriorFirst,
    },
    {
      name: "Exterior View",
      image: ExteriorSecond,
    },
    {
      name: "Exterior View",
      image: ExteriorThird,
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
              title1="Interior"
              title2="Exterior"
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
                    InteriorOne,
                    InteriorTwo,
                    InteriorThree,
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
