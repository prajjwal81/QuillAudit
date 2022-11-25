import React from "react";
import cubes from "../../Images/cubes.png";

const MidContent1 = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <div
            style={{
              font: "normal normal normal 60px/87px Jost",
              color: "#ffffff",
              width: "",
              marginLeft: "9vw",
              marginTop: "100px",
            }}
          >
            Emerging Web3 Ventures Trust Our Smart Contract Audits & Diligence
            Services
          </div>
          <div
            style={{
              font: "normal normal normal 32px/46px Jost",
              letterSpacing: "0px",
              color: "rgba(255, 255, 255, 1)",
              marginLeft: "10vw",
              marginTop: "50px",
            }}
          >
            QuillAudits, Making web3 a safer place
          </div>
        </div>
        <span>
          <img src={cubes} alt="" style={{ height: "570px" }} />
        </span>
      </div>

      <div style={{ display: "flex", marginTop: "-64px" }}>
        <span style={{ paddingTop: "10px" }}>
          <span
            style={{
              color: "whitesmoke",
              font: "normal normal normal 20px/29px Jost;",
              height: "50px",
              width: "267px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "10px",
              marginTop: "18px",
              marginLeft: "9vw",
              background:
                "linear-gradient(90deg,rgba(75,75,239,255),rgba(65,123,241,255),rgba(94,129,249,255)",
            }}
          >
            Request Free Quote
          </span>
        </span>
        <div
          style={{
            color: "whitesmoke",
            font: "normal normal normal 20px/29px Jost;",
            border: "solid 4px rgba(21, 48, 111, 1) ",
            height: "55px",
            width: "267px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "10px",
            marginTop: "27px",
            marginLeft: "50px",
          }}
        >
          Explore Services
        </div>
      </div>
    </>
  );
};

export default MidContent1;
