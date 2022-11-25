import React from "react";
import men from "../../Images/men.png";

const Part2 = () => {
  return (
    <div style={{ marginTop: "10px", display: "flex" }}>
      <div>
        <div
          style={{
            font: "normal normal medium 16px/32px Jost",
            letterspacing: "3px",
            color: "#2D83EE",
            texttransform: "uppercase",
            opacity: "1",
            marginLeft: "15vw",
          }}
        >
          Service
        </div>
        <div
          style={{
            marginLeft: "15vw",
            font: "normal normal medium 40px/64px Jost",
            letterSpacing: "-0.71px",
            color: "#391400",
            opacity: "1",
            fontSize: "40px",
          }}
        >
          Blockchain Penetration Testing
        </div>
        <div
          style={{
            marginLeft: "15vw",
            marginRight: "154px",
            font: "normal normal medium 18px/32px Jost",
            letterSpacing: "0px",
            color: "#391400",
            opacity: "1",
            fontSize: "17px",
            width: "32vw",
            marginTop: "20px",
          }}
        >
          QuillAudits proven strategy to tackle vulnerabilities specific to
          blockchain technology comes with a mix-blend of conventional
          pentesting approach and dynamic blockchain analysis.
        </div>
        <div>
          <span
            style={{
              color: "whitesmoke",
              font: "normal normal normal 20px/29px Jost;",
              marginLeft: "15vw",
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
      <span>
        <img src={men} alt="" style={{ marginTop: "1vw", marginLeft: "4vw" }} />
      </span>
    </div>
  );
};

export default Part2;
