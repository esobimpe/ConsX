import React from "react";
import { Box } from "@mui/material";
import Banner from "../component/home/banner";
import Ideas from "../component/home/ideas";
import Reason from "../component/home/reason";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

function Home() {
  return (
    <>
      <Box>
        <Navbar />
        <Banner />
        <Ideas />
        <Reason />
        <Footer />
      </Box>
    </>
  );
}

export default Home;
