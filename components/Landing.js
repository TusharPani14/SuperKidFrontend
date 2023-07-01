import { Box, Typography } from "@mui/material";
import backgroundImage from "../pictures/poster.png";
import Image from "next/image";
import image from '../pictures/image1.png'
import Button from '@mui/material/Button';
import dash from '../pictures/dash.png'
import Link from "next/link";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

const FixedButtonContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: "0px",
  right: "-4em",
  zIndex: 999,
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const Landing = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", lg: "70vh" },
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbc58a",
          flexWrap: { xs: "wrap-reverse", lg: "nowrap" },
          padding: "0em 0.7em",
          marginTop: { xs: "3.5em", sm: "4em", xl: "4em" },
        }}
      >
        <Image src={image} width={450} style={{ alignSelf: "flex-end" }} />
        {/* <Box sx={{background:"#fff" , borderRadius:"17.9547px", boxShadow:"0px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)" ,color:"#000" , textTransform:"none" , width: '90%', position:"relative" , bottom:"2em" , display:"flex" , justifyContent:"start" , alignItems:"start" , flexDirection:"column" , padding:"0.5em 1em"}}><Typography sx={{fontWeight:"600" , fontSize:"20px"}}>Super Kid</Typography><Typography sx={{fontSize:"14px"}}>Make your kid face the world</Typography>  </Box> */}
        <Box sx={{ alignSelf: "flex-end", display: { xs: "none", xl: "block", lg: "block", sm: "none", md: "block" } }}> <Image src={dash} width={200} style={{ alignSelf: "flex-end", position: "relative", right: "4em" }} /></Box>
        <Box sx={{ width: { xs: "auto", xl: "600px" }, minWidth: { xs: "0px", md: "400px", lg: "400px", xl: "400px" }, height: "auto", display: "flex", flexDirection: "column", justifyContent: "flex-start", color: "#000" }}>
          <Typography sx={{ fontSize: { xs: "35px", sm: "40px", md: "45px", xl: "57px" }, fontWeight: "600" }}>Nurture Your 0-2 Year Old With</Typography>
          <Typography sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px", xl: "42px" } }}>BrainboostingFramework</Typography>
          <Typography sx={{ fontSize: { xs: "25px", sm: "30px", md: "35px", xl: "42px" } }}>Only 10 minutes a day of daily, <br /> screen-free activities</Typography>
          <Box sx={{ display: "flex", flexDirection: "column-reverse" }}><Link href={{ pathname: '/Register', query: { price: 349 } }}><Button variant="contained" sx={{ background: "linear-gradient(0deg, #FCD281 0%, #FBCF7A 15%, #FAC669 35.99%, #F7B94D 59.99%, #F4A627 85.99%, #F39B0E 99.98%)", borderRadius: "52.8079px", fontWeight: "700", color: "#000", fontSize: { xs: "20px", sm: "19px" }, textTransform: "none", width: { xl: "170px", lg: "170px", md: "170px", sm: "170px", xs: "100%" }, marginTop: "1em", height: "70px" }}>Register Now</Button></Link>
            <Box sx={{ alignSelf: "flex-end", transform: { xs: "rotate(80deg)", md: "rotate(0deg)" }, display: { xs: "block", xl: "none", lg: "none", md: "none", sm: "block" }, position: "relative", top: { xs: "2.2em" } }}> <Image src={dash} width={200} style={{ alignSelf: "flex-end", position: "relative", right: "4em" }} /></Box>
          </Box>
        </Box>
        <FixedButtonContainer sx={{ opacity: showButton ? 1 : 0 }} className="repo">
          <Link href={{ pathname: '/Register', query: { price: 349 } }}> <Button
            variant="contained"
            sx={{
              background: "linear-gradient(0deg, #FCD281 0%, #FBCF7A 15%, #FAC669 35.99%, #F7B94D 59.99%, #F4A627 85.99%, #F39B0E 99.98%)",
              borderTopLeftRadius: "52.8079px",
              borderTopRightRadius: "52.8079px",
              fontWeight: "700",
              color: "#000",
              fontSize: "17px",
              textTransform: "none",
              width: "170px",
              transform: { xs: "rotate(0deg)", sm: "rotate(-90deg)" },
            }}
          >
            Register Now</Button></Link>
        </FixedButtonContainer>
      </Box>

      <Box sx={{ height: { xs: "auto", sm: "160px" }, width: "100vw", background: "#F89015", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", color: "white", gap: { xs: "30px", lg: "20px", md: "15px", padding: '1.2rem' } }}>
        <Typography sx={{ fontSize: { xs: "18px", lg: "19px", md: "20px" }, fontWeight: "600" }}>160+ COUNTRIES SERVED</Typography>
        <Typography sx={{ fontSize: { xs: "18px", lg: "19px", md: "20px" }, fontWeight: "600" }}>4.5+ STAR APP RATING</Typography>
        <Typography sx={{ fontSize: { xs: "18px", lg: "19px", md: "20px" }, fontWeight: "600" }}>100% MONEY BACK GUARANTEE</Typography>
        <Typography sx={{ fontSize: { xs: "18px", lg: "19px", md: "20px" }, fontWeight: "600" }}>100K+ HAPPY PARENTS</Typography>
      </Box>
    </>
  );
}

export default Landing;