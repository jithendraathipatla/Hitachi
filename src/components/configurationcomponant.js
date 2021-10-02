import React from "react"
import { css } from "@emotion/core"
import Modal from "./modal"
import {BiRupee} from 'react-icons/bi'

const Tabel = () => {
  return (
    <div>
      <table className="table-is-bordered">
        <thead>
          <tr
            className="is-selected"
            style={{ backgroundColor: "#4450a8db", border: "3px solid #eee" }}
          >
            <th>Type</th>
            <th style={{ background: "black" }}>Area</th>
            <th>Starting At</th>
            <th style={{ background: "black" }}>Price</th>
          </tr>
        </thead>

        <tbody css={bod}>
         
          <tr>
            <td>Diamond </td>
            <td>2400 sq.ft</td>
            <td>
              <Modal title="On Request" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Complete BreakUp" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>Ruby</td>
            <td>1500 sq.ft</td>
            <td>
              <Modal title="On Request" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Complete BreakUp" class="modalbuttonsmall" />
            </td>
          </tr>
          <tr>
            <td>Sapphire</td>
            <td>1200 sq.ft</td>
            <td>
              <Modal title="On Request" class="modalbuttonsmall" />
            </td>
            <td>
              <Modal title="Complete BreakUp" class="modalbuttonsmall" />
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
