import React from "react"

const HighlightFormTwo = () => {
  return (
    <div className="carousel-captiona">
      <span
        style={{
          backgroundColor: "#4450a8db",
          background:
            "linear-gradient(-45deg, rgb(19 19 18), rgba(68, 80, 168, 0.86), rgb(37 36 130), rgba(68, 80, 168, 0.86)) 0% 0% / 400% 400%",
          backgroundSize: "400% 400%",
          webkitAnimation: "Gradient 3s ease infinite",
          mozAnimation: "Gradient 3s ease infinite",
          animation: "Gradient 3s ease infinite",
          color: "#fff",
          padding: "2px",
          width: "23.1%",
          display: "block",
          margin: "5px 0",
          fontSize: "20px",
        }}
        className="prewidth"
      >
        <span style={{ display: "block", fontSize: "1.1rem" }}>
          <span
            className="animated infinite"
            style={{ display: "block", animationDuration: "3s" }}
          >
            Booking Open
          </span>
        </span>
      </span>
      <h1>Adarsh Savana</h1>
      <h4>Whitefield, Bangalore</h4>
      <h4>Exclusive Homes In Whitefield, Bangalore</h4>
     
      <ul className="pro-spec">
        {" "}
        <li>
          <span className="list-icon">▸</span> <span className="heading">Acres</span> :
          16.6 Acres
        </li>{" "}
        <li>
          <span className="list-icon">▸</span>{" "}
          <span className="heading">Possession</span> : Dec 2023*
        </li>{" "}
      </ul>

      <span
        style={{
          backgroundColor: "#4450a8db",
          background:
          "linear-gradient(-45deg, rgb(19 19 18), rgba(68, 80, 168, 0.86), rgb(37 36 130), rgba(68, 80, 168, 0.86)) 0% 0% / 400% 400%",
          backgroundSize: "400% 400%",
          webkitAnimation: "Gradient 3s ease infinite",
          mozAnimation: "Gradient 3s ease infinite",
          animation: "Gradient 3s ease infinite",
          color: "#fff",
          padding: "5px",
          textAlign: "center",
          display: "block",
          margin: "5px 0",
        }}
      >
        <span
          style={{ display: "block", fontSize: "1.2rem", letterSpacing: "3px" }}
          className="highlightree"
        >
          <span
            className="animated bounceIn infinite"
            style={{
              animationDuration: "3s",
              display: "block",
              padding: "2px",
            }}
          >
            {" "}
            Launch Offer Price : ₹7250/- psf
            <br /> For First 25 Units ONLY!
            <br /> Just 5% GST{" "}
          </span>
        </span>
      </span>

      <h3>Luxury 3 &amp; 4 BHK Apartments</h3>
      <h2>₹ 1.32 Cr* Onwards </h2>
      

      <div
        style={{ border: "1px solid white", textAlign: "center" }}
        className="rera"
      >
        <h5 style={{ textAlign: "center", color: "white" }}>RERA No:</h5>
        <h6>PRM/KA/RERA/1251/446/PR/200811/003528</h6>
      </div>
    </div>
  )
}

export default HighlightFormTwo
