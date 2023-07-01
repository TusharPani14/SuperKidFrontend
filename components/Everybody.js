import { Box, Typography } from "@mui/material";
import stars from '../pictures/stars.png'
import Image from "next/image";
import Button from '@mui/material/Button'
import MultiCarousel from "./Slider";
import Link from "next/link";
const Everybody = () => {
  return (
    <>
      <Box sx={{ background: "rgba(251, 197, 139, 0.88)", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "2em 0.7em", gap: "22px" }}>
        <Box sx={{ display: "flex", gap: "25px" }}>
          <Image src={stars} width={45} style={{ position: "relative", top: "2em" }} />
          <Typography sx={{ color: "#DE930B", fontSize: { xs: "30px", sm: "40px", md: "45px", xl: "55px" }, fontWeight: "700", whiteSpace: { xs: "normal", sm: "wrap" } }}>
            Everybody loves Super Kids
          </Typography>
        </Box>
        <Typography sx={{ fontSize: { xs: "20px", sm: "25px", md: "30px" }, textAlign: "center", alignSelf: "center" }}>Watch what real parents, just like you, from <br />
          around the world are saying about our programs.</Typography>
        <Box sx={{ width: "90%", marginTop: { xs: "1em", md: "3em" } }}>
          <MultiCarousel />
        </Box>
        <Link href={{ pathname: '/Register', query: { price: 349 } }}><Button variant="contained" sx={{ background: "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)", borderRadius: "52.8079px", fontWeight: "700", color: "#000", fontSize: "14px", textTransform: "none", height: "40px", width: "170px", alignSelf: "center", marginTop: "1.5em" }}>Start Now</Button></Link>
      </Box>
    </>
  );
}
export default Everybody;