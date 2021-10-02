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
  const [isShown, setIsShown] = useState(false)
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
      <SEO title="Adarsh Savana | ITPL | Brochure" />
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
              Prestige Group presents Adarsh Savana at Whitefield ECC Road,a
              flourishing suburb of Bangalore. Made by the best of
              extravagances, this milestone will presently wake up at the
              Whitefield ECC Road.It is an upcoming new residential project located in
              Whitefield ECC Road Bangalore. And Locations is Pattandur Agrahara,
              Whitefield ECC Road, Bangalore, Karnataka 560066.It is construction by
              Prestige Group which is one of the top real-estate firms of the
              country with projects spread across the cities of India.It Also
              includes a clubhouse, fully equipped gymnasium, swimming pool,
              multi-purpose hall, 24/7 Security and much more. Prestige
              Savana comes with smartly designed homes and ample space that
              is utilized to give you more in life. And there will be the best
              International Schools, work places, Quality Health Care
              Facilities, Shopping Malls, Hotels and Restaurants and much more.
              Achievements of Prestige Group which are worth mention below:- i)
              Prestige Group has been commemorated with India’s most trusted
              brand 2015 award at Hotel Leela, ii)Mumbai by IBC Info Media Corp,
              USA, in association with the International brand council. And many
              more Awards.
              <br />
              <br />
              It is construction by Prestige Group which is one of the top
              real-estate firms of the country with projects spread across the
              cities of India.It Also includes a clubhouse, fully equipped
              gymnasium, swimming pool, multi-purpose hall, 24/7 Security and
              much more.
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
        <Titlecomponent title="Sarvarna Walkthrough" />
        <iframe className="youtube"
          width="69%"
          height="345"
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
