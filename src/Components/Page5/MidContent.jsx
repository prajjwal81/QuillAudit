import React from "react";
import pic from "../../Images/pic.png";

const Page5MidContent = () => {
  return (
    <div
      style={{
        width: "1255px",
        height: "580px",
        background: "#2D83EE",
        borderRadius: "20px",
        margin: "40px",
        marginLeft: "145px",
        display: "flex",
        gap: "140px",
      }}
    >
      <div>
        <div
          style={{
            font: "normal normal medium 45px/65px Jost",
            letterSpacing: "0px",
            color: "#FFFFFF",
            fontSize: "50px",
            marginTop: "114px",
            marginLeft: "40px",
          }}
        >
          Join Hands With us to secure Web3 Together
        </div>
        <div
          style={{
            font: "normal normal medium 45px/65px Jost",
            letterSpacing: "0px",
            color: "#FFFFFF",
            marginTop: "14px",
            marginLeft: "40px",
          }}
        >
          Help us in our journey to secure web3 by joining our team of talented
          individuals spread across the globe.
        </div>
        <button
          style={{
            color: "black",
            font: "normal normal normal 20px/29px Jost;",
            height: "50px",
            width: "148px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            borderRadius: "10px",

            background: "white",
            marginTop: "104px",
            marginLeft: "40px",
          }}
        >
          {" "}
          Apply Now
        </button>
      </div>
      <div>
        <img
          src={pic}
          alt=""
          style={{ marginTop: "114px", marginRight: "20px" }}
        />
      </div>
    </div>
  );
};

export default Page5MidContent;
