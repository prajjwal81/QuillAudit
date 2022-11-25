import React from "react";
import footerImage from "../../Images/page3 Footer.png";

const Footer = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <div
        style={{
          textAlign: "left",
          font: "normal normal medium 16px/32px Jost",
          letterSpacing: "4.8px",
          color: "#2D83EE",
          textTransform: "uppercase",
          opacity: "1",
          marginLeft: "45vw",
        }}
      >
        THE SECURITY
      </div>
      <div
        style={{
          textAlign: "left",
          font: "normal normal medium 40px/64px Jost",
          letterSpacing: "-0.71px",
          color: "#391400",
          textTransform: "capitalize",
          opacity: "1",
          marginLeft: "28vw",
          marginTop: "10px",
          fontSize: "44px",
        }}
      >
        How We Secure Your Web3 Project
      </div>
      <img
        src={footerImage}
        alt=""
        style={{ width: "100vw", padding: "38px" }}
      />
    </div>
  );
};

export default Footer;
