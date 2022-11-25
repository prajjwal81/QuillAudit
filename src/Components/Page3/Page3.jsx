import React from "react";

import book from "../../Images/book.png";

const Page3 = () => {
  return (
    <div
      style={{
        width: "auto",
        height: "994px",
        top: "-8.000213623046875px",
        left: "-14px",
        background:
          "linear-gradient(90deg, rgba(21, 48, 111, 1) , rgb(2, 2, 187),rgb(3, 3, 37)",
        mixBlendMode: "multiply",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          textAlign: "center",
          font: "normal normal medium 16px/32px Jost",
          letterSpacing: "3px",
          color: "#2D83EE",
          textTransform: "uppercase",
          opacity: "1",
          fontSize: "32px",
        }}
      >
        Portfolio
      </div>
      <div
        style={{
          textAlign: "center",
          font: "normal normal medium 40px/64px Jost;",
          letterSpacing: "-0.71px",
          color: "#ffffff",
          opacity: "1",
          fontSize: "64px",
        }}
      >
        Latest Work
      </div>
      <div style={{ display: "flex", marginLeft: "31.5vw", marginTop: "40px" }}>
        <button
          style={{
            borderRadius: "28px",
            width: "168px",
            height: "50px",
            background: "#3F7AF0",
            color: "#ffffff",
          }}
        >
          Ehereum
        </button>
        <button
          style={{
            borderRadius: "28px",
            marginLeft: "2vw",
            width: "168px",
            height: "50px",
            border: "solid 2px white",
            background: "inherit",
            color: "#ffffff",
          }}
        >
          Binance SC
        </button>
        <button
          style={{
            borderRadius: "28px",
            marginLeft: "2vw",
            width: "75px",
            height: "50px",
            border: "solid 2px white",
            background: "inherit",
            color: "#ffffff",
          }}
        >
          NFT
        </button>
        <button
          style={{
            borderRadius: "28px",
            marginLeft: "2vw",
            width: "130px",
            height: "50px",
            border: "solid 2px white",
            background: "inherit",
            color: "#ffffff",
          }}
        >
          Solana
        </button>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "5vw",
          gap: "100px",
          marginLeft: "90px",
        }}
      >
        <span
          style={{ color: "white", fontSize: "xxx-large", marginTop: "88px" }}
        >
          ＜
        </span>
        <img src={book} alt="" style={{ width: "290px" }} />
        <img src={book} alt="" style={{ width: "290px" }} />
        <img src={book} alt="" style={{ width: "290px" }} />
        <span
          style={{ color: "white", fontSize: "xxx-large", marginTop: "88px" }}
        >
          ＞
        </span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          gap: "60px",
          marginLeft: "230px",
        }}
      >
        <div
          style={{
            width: "345px",

            font: "normal normal medium 22px/32px Jost",
            color: "#ffffff",
            fontSize: "32px",
          }}
        >
          StackOS Audit Report
        </div>
        <div
          style={{
            width: "304px",
            font: "normal normal medium 22px/32px Jost",
            color: "#ffffff",
            fontSize: "32px",
          }}
        >
          StackOS Audit Report
        </div>
        <div
          style={{
            width: "304px",
            font: "normal normal medium 22px/32px Jost",
            color: "#ffffff",

            fontSize: "32px",
          }}
        >
          StackOS Audit Report
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "27px",
          marginLeft: "50px",
          marginTop: "30px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", marginLeft: "125px" }}>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            View
          </button>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            Download
          </button>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            View
          </button>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            Download
          </button>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            View
          </button>
          <button
            style={{
              width: "175px",
              height: "50px",
              background: "inherit",
              color: "#ffffff",
              border: "solid 1px grey",
            }}
          >
            Download
          </button>
        </div>
      </div>
      <button
        style={{
          width: "175px",
          height: "50px",
          background: "inherit",
          color: "#ffffff",
          border: "solid 1px grey",
          marginTop: "50px",
          marginLeft: "45vw",
        }}
      >
        Button
      </button>
    </div>
  );
};

export default Page3;
