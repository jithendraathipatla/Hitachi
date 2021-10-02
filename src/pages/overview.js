import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TitleComponent from '../components/titlecomponent'
import {css} from '@emotion/core'
import OverviewComponant from '../components/overviewcomponant'



const Overview = () => {
    return(
        <Layout>
            <SEO title="Adarsh Savana overview" />
            
        
        <div style={{ paddingTop: "10vh", textAlign: "justify" }}>
          <div style={{textAlign:"center"}}>
              <TitleComponent title="Adarsh Savana Overview"/>
          </div>
        <div css={abn}>
          <span>Adarsh Savana is an up and coming extravagance private task
          situated in Whitefield, a flourishing suburb of Bangalore. Prestige
          Savana is a mix of extravagance, comfort, and security. It is an
          insightfully structured advancement by Prestige Group that will assist
          the inhabitants with nurturing their psyche, body, and soul. Regarded
          inhabitants of this venture will get a choice to look over an
          assortment of homes where they can appreciate sees and unwind in the
          tranquility of the region itself. This gated network accompanies
          keenly structured homes and sufficient space that is exquisitely used
          to give you more throughout everyday life. Being situated in created
          neighborhoods, your new home is in the region of shops, shopping
          centers, schools, and workplaces. Glory Savana is the ideal private
          goal for you and your family.</span>
        </div>
        <hr/>
      </div>
            <OverviewComponant/>
          <hr/>
         
        </Layout>
       
    )
}

export default Overview;

const abn = css`
  padding-left: 30px;
  padding-right:20px;
  span{
      font-size:18px;
      line-height:25px;
  }
`