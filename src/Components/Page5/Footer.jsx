import React from "react";
import quillAudit from "../../Images/Final Vertical White 2.svg";
import flag1 from "../../Images/flag1.svg";
import flag2 from "../../Images/flag2.svg";
import flag3 from "../../Images/flag3.svg";
import flag4 from "../../Images/flag4.svg";
import flag5 from "../../Images/flag5.png";
import flag6 from "../../Images/flag6.png";
import flag7 from "../../Images/flag7.png";
import flag8 from "../../Images/flag8.svg";
import flag9 from "../../Images/flag9.svg";

const Page5Footer = () => {
  return (
    <div style={{ height: "450px", background: "#28293E" }}>
      <div
        style={{
          display: "flex",
          gap: "70px",
          marginLeft: "195px",
          color: "#ffffff",
          paddingTop: "70px",
        }}
      >
        <div>
          <div
            style={{
              font: " normal normal medium 22px/32px Jost",
              fontSize: "17px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Parent Company
          </div>
          <img src={quillAudit} alt="" />
          <div
            style={{
              font: " normal normal medium 22px/32px Jost",
              width: "270px",
              lineHeight: 2,
              marginTop: "16px",
            }}
          >
            Quillhash delivers enterprise grade blockchain technology to leading
            companies worldwide.
          </div>
        </div>
        <div>
          <div
            style={{
              font: " normal normal medium 22px/32px Jost",
              fontSize: "17px",
              fontWeight: "bold",
              width: "208px",
            }}
          >
            Explore
          </div>
          <div style={{ lineHeight: "2" }}>Careers</div>
          <div style={{ lineHeight: "2" }}>Courses</div>
          <div style={{ lineHeight: "2" }}>Blockchain Security CTF</div>
          <div style={{ lineHeight: "2" }}>QuillAudits Partner Program</div>
          <div style={{ lineHeight: "2" }}>Referral Program</div>
        </div>
        <div>
          <div
            style={{
              font: " normal normal medium 22px/32px Jost",
              fontSize: "17px",
              fontWeight: "bold",
              width: "143px",
            }}
          >
            Services
          </div>
          <div style={{ lineHeight: "2" }}>Smart Contract Auditing</div>
          <div style={{ lineHeight: "2" }}>Blockchain Pen Testing</div>
          <div style={{ lineHeight: "2" }}>Due Diligence</div>
        </div>
        <div>
          <div
            style={{
              font: " normal normal medium 22px/32px Jost",
              fontSize: "17px",
              fontWeight: "bold",
              width: "278px",
              marginBottom: "4px",
            }}
          >
            Contact Us
          </div>
          <div
            style={{
              width: "278px",
              lineHeight: "1.5",
            }}
          >
            LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near Sikanderpur DLF
            Phase1, Sector 28, Gurugram, Haryana - 122002
          </div>
          <div style={{ lineHeight: "4" }}>contact@quillaudits.com</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            color: "black",
            height: "45px",
            width: "180px",
            marginTop: "30px",
            marginLeft: "196px",
          }}
        >
          <span style={{ fontSize: "40px", marginRight: "10px" }}>🇮🇳</span> Eng
          <span style={{ fontSize: "10px", marginLeft: "10px" }}>▿</span>
        </span>
        <span
          style={{
            fontSize: "20px",
            color: "white",
            marginLeft: "310px",
            marginTop: "40px",
          }}
        >
          Join Our Journey
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginLeft: "526px",
          marginTop: "9px",
          gap: "10px",
        }}
      >
        <img src={flag1} alt="" />
        <img src={flag2} alt="" />
        <img src={flag3} alt="" />
        <img src={flag4} alt="" />
        <img src={flag5} alt="" />
        <img src={flag6} alt="" />
        <img src={flag7} alt="" />
        <img src={flag8} alt="" />
        <img src={flag9} alt="" />
      </div>
      <div
        style={{
          marginLeft: "526px",
          marginTop: "35px",
          color: "#DFDFDF",
        }}
      >
        All Rights Reserved. © Copyright 2022. QuillHash Technologies Private
        Limited
      </div>
    </div>
  );
};

export default Page5Footer;
