import React from "react";
import Footer from "./Footer";
import Header1 from "./Header";
import MidContent1 from "./MidContent";

const Page1 = () => {
  return (
    <div
      style={{
        top: "-8.000213623046875px",
        left: "-14px",
        width: "auto",
        height: "988px",
        background:
          "linear-gradient(90deg, rgba(21, 48, 111, 1) , rgb(2, 2, 187),rgb(3, 3, 37)",
        mixBlendMode: "multiply",
        opacity: 0.8,
      }}
    >
      <Header1 />
      <MidContent1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Page1;
