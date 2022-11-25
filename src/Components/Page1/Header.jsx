import React from "react";
import image from "../..//Images/Quillaudit.png";

const Header1 = () => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ marginTop: "10px" }}>
          <img
            src={image}
            alt="Quiltaudit"
            style={{
              opacity: 1,
              width: "150px",
              marginLeft: "10vw",
            }}
          />
          <span
            style={{
              font: "normal normal normal 16px/23px Jost",
              color: "#ffffff",
              fontSize: "17px",
              marginLeft: "45vh",
            }}
          >
            Audit Services ▿
          </span>
          <span
            style={{
              font: "normal normal normal 16px/23px Jost",
              color: "#ffffff",
              fontSize: "17px",
              marginLeft: "4vh",
            }}
          >
            Pricing ▿
          </span>
          <span
            style={{
              font: "normal normal normal 16px/23px Jost",
              color: "#ffffff",
              fontSize: "17px",
              marginLeft: "4vh",
            }}
          >
            Blog ▿
          </span>
          <span
            style={{
              font: "normal normal normal 16px/23px Jost",
              color: "#ffffff",
              fontSize: "17px",
              marginLeft: "4vh",
            }}
          >
            Resources ▿
          </span>
          <button
            style={{
              color: "#ffffff",
              font: "normal normal normal 20px/29px Jost;",
              height: "40px",
              width: "160px",
              borderRadius: "10px",
              background:
                "linear-gradient(90deg,rgba(75,75,239,255),rgba(65,123,241,255),rgba(94,129,249,255)",
              marginLeft: "10px",
              position: "absolute",
            }}
          >
            Portfolio
          </button>
          <button
            style={{
              color: "#ffffff",
              font: "normal normal normal 20px/29px Jost;",
              height: "40px",
              width: "160px",
              borderRadius: "10px",
              background:
                "linear-gradient(90deg,rgba(75,75,239,255),rgba(65,123,241,255),rgba(94,129,249,255)",
              marginLeft: "180px",
              position: "absolute",
            }}
          >
            Request an Audit
          </button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Header1;
