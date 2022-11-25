import React from "react";
import innerMaiIimage from "../../Images/mailInner.png";
import outerMailImage from "../../Images/Mail outer.png";
import HashingBit from "../../Images/HashingBit.png";

const Page5Header = () => {
  return (
    <div
      style={{
        height: "671px",
        background:
          "linear-gradient(90deg, rgba(21, 48, 111, 1) , rgb(2, 2, 187),rgb(3, 3, 37)",
        display: "flex",
        gap: "77px",
      }}
    >
      <div style={{ width: "800px" }}>
        <img
          src={HashingBit}
          alt=""
          style={{ marginTop: "39px", marginLeft: "30px" }}
        />
        <div
          style={{
            font: "normal normal normal 18px/26px Jost",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1",
            marginTop: "39px",
            marginLeft: "30px",
          }}
        >
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights Straight to
          your Inbox.
        </div>
        <div
          style={{
            font: "normal normal normal 18px/26px Jost",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1",
            marginTop: "39px",
            marginLeft: "30px",
          }}
        >
          Explore our weekly newsletter: HashingBits. Stay updated on everything
          we’re publishing. Stand a step ahead.
        </div>
        <input
          type="text"
          placeholder="youremail@gmail.com"
          style={{
            background: "inherit",
            width: "400px",
            marginLeft: "30px",
            marginTop: "20px",
            color: "whitesmoke",
          }}
        />
        <div
          style={{
            font: "normal normal normal 18px/26px Jost",
            letterSpacing: "0px",
            color: "#FFFFFF",
            opacity: "1",
            marginTop: "39px",
            marginLeft: "30px",
          }}
        >
          Your email has been successfully registered, headlines will be sent to
          you soon.
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <span>
          <img src={outerMailImage} alt="" />
        </span>
        <span>
          <img
            src={innerMaiIimage}
            alt=""
            style={{
              position: "absolute",
              marginLeft: "-513px",
              marginTop: "137px",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Page5Header;
