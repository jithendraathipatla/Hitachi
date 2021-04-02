import React from "react"

import { css } from "@emotion/core"
import Modal from "./modal"

const Tabel = () => {
  return (
    <div>
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
            <td>1775 sq.ft</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>3 BHK Premium</td>
            <td>2027 sq.ft</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>4 BHk</td>
            <td>2525 sq.ft</td>
            <td>
              <Modal title="Know More" class="modalbuttonsmall" />
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
