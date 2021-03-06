import { Link } from "gatsby"
import React from "react"
import Logo from "../images/svg/logo.svg"
import HomeSVG from "../images/svg/home.svg"
import LoaderSVG from "../images/svg/loader.svg"
import ReadingSVG from "../images/svg/reading-library-2.svg"
import SiteVisitSVG from "../images/svg/site-visit.svg"
import PriceSVG from "../images/svg/price.svg"
import AmenitiesSVG from "../images/svg/amenities.svg"
import LocationSVG from "../images/svg/location.svg"
import { css } from "@emotion/core"
import Drawercomponant from "../components/drawer"

const Header = () => {
  return (
    <div css={one}>
      <div css={main}>
        <div css={image}>
          <div css={imgone}>
            {" "}
            <Drawercomponant />
          </div>
          <div css={imgtwo}>
            <Link to="/">
              <img src={Logo} alt="Waterfprd logo" className="main_logo1" />
            </Link>
          </div>
        </div>
        <div css={list}>
          <ul>
            <img src={HomeSVG} alt="Home Svg" />
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <img src={AmenitiesSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/overview" activeClassName="active">
                Overview
              </Link>
            </li>
            <img src={LoaderSVG} alt="Home Svg" />
            <li>
              <Link to="/configuration" activeClassName="active">
                Configuration
              </Link>
            </li>
            <img src={ReadingSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/gallery" activeClassName="active">
                Gallery
              </Link>
            </li>
            <img src={SiteVisitSVG} alt="Home Svg" />
            <li>
              <Link to="/masterplan" activeClassName="active">
                Master Plan
              </Link>
            </li>
            <img src={PriceSVG} alt="Home Svg" />{" "}
            <li>
              <Link to="/pricing" activeClassName="active">
                Pricing
              </Link>
            </li>
            <img src={AmenitiesSVG} alt="Home Svg" />
            <li>
              <Link to="/amenities" activeClassName="active">
                Amenities
              </Link>
            </li>
            <img src={LocationSVG} alt="Home Svg" />
            <li css={last}>
              <Link to="/location" activeClassName="active">
                Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header

const main = css`
  display: flex;
  justify-content: space-between;
`

const one = css`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 0.1rem;
  z-index: 100;
  box-shadow: 0 1px 4px 1px rgb(0 0 0 / 23%);
  background: #fff;
  height:60px;
`
const imgone = css`
  display: none;
  @media (max-width: 600px) {
    display: block;

    padding-top: 21px;
    margin-right: 23px;
    margin-left: -8px;
  }
`

const imgtwo = css``

const image = css`
  img {
    width: 227px;
    padding: 10px;
    height: 44px;
    margin-top: 2px;
    padding-left: 15px;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`

const last = css`
  border-right: none !important;
  padding-right: 0px !important;
`

const list = css`
  @media (max-width: 600px) {
    display: none;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin:0px;
    padding: 14px 10px;
    padding-bottom:0px;
    li {
      padding-left: 8px;
      border-right: 0.1px solid #eee;
      padding-right: 0.5rem;
      a{
        :hover{
          color: #a88944 !important;
          padding-bottom: 15px !important;
          border-bottom: 2px solid #a88944 !important;
        }
      }
    }
    img {
      padding-left: 15px;
      margin-top: 6px;
      height: 16px;
    }
    a {
      display: block;
      text-decoration: none;
      color: #000;
      text-align: center;
      font-size: 1.25rem;
      font-weight: 490;
      letter-spacing: 0.025rem;
      padding-bottom:18px:
      
    }
  }
`
