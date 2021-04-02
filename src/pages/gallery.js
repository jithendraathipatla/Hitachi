import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import TitleComponant from "../components/titlecomponent"
import Img from "gatsby-image/withIEPolyfill"
import GalleryComponent from '../components/gallery'


const Overview = () => {
  
  return (
    <Layout>
      <SEO title="Prestige Waterford Gallery" />
     
      <div style={{ paddingTop: "10vh", textAlign: "center" }}>
        <div style={{textAlign:"center"}}>
        <TitleComponant title="Prestige Waterford Gallery"/>
        </div>
        <GalleryComponent/>
        <hr/>
      </div>
    </Layout>
  )
}

export default Overview
