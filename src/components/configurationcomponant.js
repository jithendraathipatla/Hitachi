import React from "react"
import TitleComponent from "./titlecomponent"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Tabel = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title=" Waterford Configuration" />
      </div>

      <table className="table-is-bordered">
        <thead>
          <tr
            className="is-selected"
            style={{ backgroundColor: "#a88944", border: "3px solid #eee" }}
          >
            <th>Project</th>
            <th style={{ background: "black" }}>Configuration</th>
            <th>Unit Carpet (Sq.Ft)</th>
            <th style={{ background: "black" }}>Price</th>
          </tr>
        </thead>

        <tbody css={bod}>
          <tr>
            <td rowSpan={4} style={{ fontSize: "18px", fontWeight: "500" }}>
              <br />
              Waterford
            </td>
          </tr>
          <tr>
            <td>3 BHK </td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> 1775 sq.ft </a>
              </Link>
            </td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> Know More </a>
              </Link>
            </td>
          </tr>
          <tr>
            <td>3 BHK Premium</td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> 2027 sq.ft </a>
              </Link>
            </td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> Know More </a>
              </Link>
            </td>
          </tr>
          <tr>
            <td>4 BHk</td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> 2525 sq.ft </a>
              </Link>
            </td>
            <td>
              <Link to="/contact">
                <a class="modalbuttonsmall"> Know More </a>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tabel

const bod = css`
  a {
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0.03rem;
    :hover {
      text-decoration: underline;
      color: white;
    }
  }
`
