/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SideMenu from '../components/sidemenu'
import FooterComponent from '../components/footercomponent'
import FixedFooter from '../components/footerfixed'
import Header from "./header"
import "./layout.css"
import {css} from '@emotion/core'


const Layout = ({ children }) => {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  console.log(parseInt(offset));

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <SideMenu/>
        <main>{children}</main>
        <FooterComponent/>
        <div style={{boxShadow:"0px 0px 1px 1px rgba(0,0,0,0.01)", padding:"10px", textAlign:"center", marginTop:"0px", background:"black", color:"#fff", marginBottom:"40px" }}>
            Disclaimer: This site is all about the information on the Adarsh Savana. Also Do not consider this as an official site. Information in this site might change witout your Prior notice.
        </div>
        <div css={offset > 250 ? one : two}>
          <FixedFooter/>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


const one = css`
  display: block;
`
const two = css`
  display: none;
`