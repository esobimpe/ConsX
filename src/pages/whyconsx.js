import { Box } from "@mui/material";
import React from "react";
import Banner from "../component/whyconsx/banner";
import Mission from "../component/whyconsx/mission";
import Desc from "../component/whyconsx/desc";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

function WhyConsX() {
  return (
    <>
      <Box>
        <Navbar />
        <Banner />
        <Mission />
        <Desc />
        {/* <Team /> */}
      </Box>
      <Footer />
    </>
  );
}

export default WhyConsX;
