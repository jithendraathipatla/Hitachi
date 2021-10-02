import React, { useState } from "react"
import ProjectType from "../images/svg/house.svg"
import TotalLandArea from "../images/svg/mountain.svg"
import TotalUnits from "../images/svg/binary-code.svg"
import NumberOfFloors from "../images/svg/castle.svg"
import TotalTowers from "../images/svg/cityscape.svg"
import UnitVarients from "../images/svg/towel.svg"
import PossessionDate from "../images/svg/calender.svg"
import Location from "../images/svg/location.svg"
import Title from "./titlecomponent"


const StatefulOverview = () => {
  const [state, setstate] = useState([
    {
      main_title: "Project Type",
      sub_heading: "Residential Plots",
      image: ProjectType,
    },
    {
      main_title: "Total Land Area",
      sub_heading: "100 Acer",
      image: TotalLandArea,
    },
    {
      main_title: "Total Units",
      sub_heading: "689 Units",
      image: TotalUnits,
    },
    {
      main_title: "Number Of Floors",
      sub_heading: "N.A",
      image: NumberOfFloors,
    },
    {
      main_title: "Total Towers",
      sub_heading: "N.A",
      image: TotalTowers,
    },
    {
      main_title: "Unit Varients",
      sub_heading: "Plots",
      image: UnitVarients,
    },
    {
      main_title: "Possession Date",
      sub_heading: "Dec 2021",
      image: PossessionDate,
    },
    {
      main_title: "Location",
      sub_heading: "Whitefield ECC Road, Bangalore",
      image: Location,
    },
  ])

  const displayingOverview = () => {
    return state.map((item, i) => {
      return (
        <div key={i} className="properly">
          <img src={item.image} alt={item.main_title} width="40px" />
          <div className="headings">
            <h1>{item.main_title}</h1>
            <h2>{item.sub_heading}</h2>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title title="Savana Overview" />
      </div>

      <div className="Overview_main">{displayingOverview()}</div>
    </div>
  )
}

export default StatefulOverview
