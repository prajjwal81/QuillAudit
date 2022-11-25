import React from "react";
import twoMen from "../../Images/Two men.png";

const Part3 = () => {
  return (
    <div style={{ marginTop: "10px", display: "flex" }}>
      <span>
        <span>
          <img
            src={twoMen}
            alt=""
            style={{ marginTop: "-1vw", marginLeft: "10vw" }}
          />
        </span>
      </span>
      <div>
        <div
          style={{
            font: "normal normal medium 16px/32px Jost",
            letterspacing: "3px",
            color: "#2D83EE",
            texttransform: "uppercase",
            opacity: "1",
            marginLeft: "26vw",
          }}
        >
          Service
        </div>
        <div
          style={{
            marginLeft: "26vw",
            font: "normal normal medium 40px/64px Jost",
            letterSpacing: "-0.71px",
            color: "#391400",
            opacity: "1",
            fontSize: "40px",
          }}
        >
          Due Diligence
        </div>
        <div
          style={{
            marginLeft: "26vw",
            marginRight: "154px",
            font: "normal normal medium 18px/32px Jost",
            letterSpacing: "0px",
            color: "#391400",
            opacity: "1",
            fontSize: "17px",
            width: "29vw",
            marginTop: "20px",
          }}
        >
          QuillAudits acknowledges the significant threats involved in smart
          contracts, which can lead to many critical possibilities.
          <br />
          <br /> DeFi Due Diligence
          <br /> NFT Due Diligence Rug
          <br />
          Pull Due Diligence
        </div>
        <div>
          <span
            style={{
              color: "whitesmoke",
              font: "normal normal normal 20px/29px Jost;",
              marginLeft: "26vw",
              height: "50px",
              width: "148px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "10px",
              marginTop: "22px",
              background:
                "linear-gradient(90deg,rgba(75,75,239,255),rgba(65,123,241,255),rgba(94,129,249,255)",
            }}
          >
            Explore
          </span>
        </div>
      </div>
    </div>
  );
};

export default Part3;
