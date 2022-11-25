import React from "react";

const Footer = () => {
  return (
    <div style={{}}>
      <div style={{ display: "flex ", margintop: "50px" }}>
        <div>
          <span
            style={{
              textAlign: "center",
              font: "normal normal 600 50px/73px Jost",
              letterSpacing: "0px",
              color: "rgba(45, 131, 238, 1)",
              textTransform: "capitalize",
              opacity: "1",
              marginLeft: "10vw",
            }}
          >
            $12.8B
          </span>
          <div
            style={{
              font: "normal normal medium 22px/32px Jost",
              textAlign: "left",
              color: "white",
              marginLeft: "20vw",
              marginTop: "-64px",
              width: "169px",
            }}
          >
            Amount Lost To DeFi Hacks in 2021
          </div>
        </div>
        <div>
          <span
            style={{
              textAlign: "center",
              font: "normal normal 600 50px/73px Jost",
              letterSpacing: "0px",
              color: "rgba(45, 131, 238, 1)",
              textTransform: "capitalize",
              opacity: "1",
              marginLeft: "13vw",
            }}
          >
            600K
          </span>
          <div
            style={{
              font: "normal normal medium 22px/32px Jost",
              textAlign: "left",
              color: "white",
              marginLeft: "21vw",
              marginTop: "-64px",
              width: "169px",
            }}
          >
            Lines of Codes Secured by QuillAudits
          </div>
        </div>
        <div>
          <span
            style={{
              textAlign: "center",
              font: "normal normal 600 50px/73px Jost",
              letterSpacing: "0px",
              color: "rgba(45, 131, 238, 1)",
              textTransform: "capitalize",
              opacity: "1",
              marginLeft: "10vw",
            }}
          >
            $14.6B
          </span>
          <div
            style={{
              font: "normal normal medium 22px/32px Jost",
              textAlign: "left",
              color: "white",
              marginLeft: "20vw",
              marginTop: "-64px",
              width: "139px",
            }}
          >
            Amount Protected By QuillAudits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
