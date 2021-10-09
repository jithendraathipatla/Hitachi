import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Firstcomponant from "../components/highlightcomponant"
import Secondcomponant from "../components/highlightform"
import Titlecomponent from "../components/titlecomponent"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import OverviewComponent from "../components/overviewcomponant"
import Configirationcomponant from "../components/configurationcomponant"
import AmenititesComponant from "../components/amenitiescomponant"
import SliderComponant from "../components/slider"
import GalleryComponent from "../components/gallery"
import SiteAndFloorPlanComponent from "../components/siteandfloor"
import PricingComponent from '../components/pricing'


const IndexPage = () => {
  const [isShown, setIsShown] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "website-banner.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 220) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Adarsh Savana | Plots in Yelahanka | Plots for sale in Bangalore" />
      <div
        css={one}
        style={{ maxWidth: `100%`, marginBottom: `1.45rem`, marginTop: `50px` }}
      >
        <SliderComponant />
      </div>
      <div css={two}>
        <div css={twoone}>
          <Firstcomponant />
        </div>
        <div css={twotwo}>
          <Secondcomponant />
        </div>
      </div>
      <div css={about}>
        <div style={{ textAlign: "center" }}>
          <Titlecomponent title="About Adarsh Savana" />
        </div>
        <div css={overview}>
          <div css={gimage}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Savana Image"
            />
          </div>
          <div style={{ textAlign: "justify" }}>
            <span>
            Adarsh savana is luxury plotted development at  Devanahalli North Bangalore, located at prominent location. It’s where all the new development is happening,
            Adarsh Savana is the awaited residential marvels come up in Airport Road, North Bangalore. Adarsh Savana project is slated across a huge land space of <b>100 acres</b> 
            and offers premium villa plot of several structures. Its aesthetic designs show classy interiors and top amenities for ultimate satisfaction. Adarsh Savana is giving a <b>Huge Club House of 44,000 Sq.ft</b> with a full loaded amenities
              <br />
              <br />
             <b>Adarsh savanna is giving 14 Acres of Lush Green Expanse exclusively dedicated for Parks & Amenities. </b>
             Adarsh Savana future of in North Bangalore is a more than a destination of investors and end-users, alike with mammoth public private partnership preparing towards a future ready micro market.
              <b>Adarsh Developers</b> has decided to come up with plotted development in north Bangalore in because rapid Infrastructure development, excellent connectivity, and proximity to the International Airport forms the backbone of North Banagaluru’s Growth as a real estate destination.  Vicinity of Adarsh savana is proposed to improvements in arterial Road Network and Metro Connectivity , infrastructure, Commercial , IT hubs , to this locality will only add to the Investment Potential of this sleepy suburban zone. 
            </span>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div>
        <OverviewComponent />
      </div>
      <hr />
      <div>
      <div style={{ textAlign: "center" }}>
        <Titlecomponent title="Savana Configuration" />
      </div>
        <Configirationcomponant />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <SiteAndFloorPlanComponent />
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Titlecomponent title="Savana Gallery" />
        </div>
        <GalleryComponent />
      </div>
      <hr />
      <div>
      <div style={{ textAlign: "center" }}>
          <Titlecomponent title="Savana Pricing" />
        </div>
        <PricingComponent/>
      </div>
      <hr/>
      <div>
        <AmenititesComponant />
      </div>
      <hr />
      <div style={{textAlign:"center"}}>
        <Titlecomponent title="Savana Walkthrough" />
        <iframe className="youtube"
          width="69%"
          height="345"
          title="Savana Video"
          src="https://www.youtube.com/embed/uwhLwVvcYTU"
        ></iframe>
      </div>
      <hr />
    </Layout>
  )
}

export default IndexPage

const floorplans = css`
  display: block;
  position: relative;
  padding-top: 20px;
  text-align: center;
  img {
    :hover {
      cursor: pointer;
      opacity: 0.2 !important;
    }
  }
`
const floorplansa = css`
  display: block;
  position: relative;
  padding-top: 20px;
  text-align: center;
  img {
    opacity: 0.2 !important;
  }
`

const knowmore = css`
  left: 50%;
  margin-top: -27%;
  position: absolute;
  @media (max-width: 600px) {
    left: 36%;
    margin-top: -34%;
    position: absolute;
  }
`

const overview = css`
  padding: 0px 40px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 4fr 8fr;
  span {
    line-height: 25px;
    font-size: 18px;
  }
  @media (max-width: 600px) {
    display: block;
    padding: 0px 10px;
  }
`

const twoone = css`
  background-color: rgba(0, 0, 0, 0.7);
  width: 500px;
  padding: 10px 10px 47px;
  border-radius: 5px;
  text-align: justify;
  margin-left: 40px;
  height: 61vh;
  @media (max-width: 600px) {
    height: 280px;
    width: 310px;
    margin-top: -20px;
  }
`

const twotwo = css`
  margin-right: 25px;
  background-color: rgba(0, 0, 0, 0.81);
  width: 300px;
  height: 330px;
  margin-top: 1%;
  @media (max-width: 600px) {
    display: none;
  }
`

const one = css`
  position: relative;
`

const two = css`
  position: absolute;
  top: 14%;
  z-index: 40;
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-height: 400px;
    img {
      height: 400px;
    }
  }
`

const gimage = css`
  @media (max-width: 600px) {
    display: none;
  }
`

const about = css`
 margin-top:-20px;
 @media(max-width:600px){
  margin-top: -150px;
 }
`
