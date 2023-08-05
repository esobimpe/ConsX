import React from "react";
import { Box } from "@mui/material";
import Banner from "../component/home/banner";
import Ideas from "../component/home/ideas";
import Reason from "../component/home/reason";

function Home() {
  return (
    <>
      <Box>
        <Banner />
        <Ideas />
        <Reason />
      </Box>
    </>
  );
}

export default Home;
