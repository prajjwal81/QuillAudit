import React from "react";
import search from "../../Images/search.png";
import Footer from "./Footer";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Page2 = () => {
  return (
    <div style={{ width: "auto", height: "1869px" }}>
      <div>
        <div
          style={{
            top: "1154px",
            left: "239px",
            width: "1482px",
            height: "168px",
          }}
        >
          <div
            style={{
              font: "normal normal medium 16px/32px Jost",
              letterSpacing: "3px",
              color: " #2D83EE",
              textTransform: "uppercase",
              opacity: "1",
              marginTop: "41px",
              marginLeft: "241px",
            }}
          >
            clients
          </div>
          <div
            style={{
              font: "normal normal medium 40px/48px Jost",
              letterSpacing: "0px",
              color: "#391400",
              opacity: "1",
              marginLeft: "241px",
              fontSize: "40px",
            }}
          >
            Partner
          </div>
          <div
            style={{
              display: "flex",
              gap: "80px",
              marginLeft: "241px",
              marginTop: "24px",
              fontSize: "20px",
              fontFamily: `Copperplate, Papyrus, fantasy`,
            }}
          >
            <span>❄️PATHFUND</span>
            <span>❄️PATHFUND</span>
            <span>❄️PATHFUND</span>
            <span>❄️PATHFUND</span>
            <span>❄️PATHFUND</span>
            <span>❄️PATHFUND</span>
          </div>
          <img
            src={search}
            alt=""
            style={{ marginTop: "2vw", marginLeft: "17vw", height: "369px" }}
          />
        </div>
        <div>
          <div>
            <div
              style={{
                font: "normal normal medium 16px/32px Jost",
                letterspacing: "3px",
                color: "#2D83EE",
                texttransform: "uppercase",
                opacity: "1",
                marginLeft: "60vw",
              }}
            >
              Service
            </div>
            <div
              style={{
                marginLeft: "60vw",
                font: "normal normal medium 40px/64px Jost",
                letterSpacing: "-0.71px",
                color: "#391400",
                opacity: "1",
                fontSize: "40px",
              }}
            >
              Smart Contract Auditing
            </div>
            <div
              style={{
                marginLeft: "60vw",
                marginRight: "154px",
                font: "normal normal medium 18px/32px Jost",
                letterSpacing: "0px",
                color: "#391400",
                opacity: "1",
                fontSize: "17px",
                width: "31vw",
                marginTop: "20px",
              }}
            >
              Our Audit Process for smart contract is based on the comprehensive
              approach we follow to investigate the code for security flaws and
              potential vulnerabilities. <br />
              <img
                src="img/628px-Ethereum_logo_2014.svg.png"
                alt=""
              /> Ethereum <br />
              Polygon
              <br /> BSC
              <br /> Solana
              <br /> EOS
            </div>
            <div>
              <span
                style={{
                  color: "whitesmoke",
                  font: "normal normal normal 20px/29px Jost;",
                  marginLeft: "60vw",
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
      </div>
      <Part2 />
      <Part3 />
      <Footer />
    </div>
  );
};

export default Page2;
