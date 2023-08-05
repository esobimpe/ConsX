import { Box } from "@mui/material";
import React from "react";
import Banner from "../component/whyconsx/banner";
import Mission from "../component/whyconsx/mission";
import Desc from "../component/whyconsx/desc";
import Team from "../component/whyconsx/team";

function WhyConsX() {
  return (
    <>
      <Box>
        <Banner />
        <Mission />
        <Desc />
        <Team />
      </Box>
    </>
  );
}

export default WhyConsX;
