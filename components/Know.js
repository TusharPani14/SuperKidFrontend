import { Box, Typography } from "@mui/material";
import Image from "next/image";
import rocket from '../pictures/rocket.png.png'
import aero from '../pictures/aeroplane.png'
import baby from '../pictures/baby.png'
import c1 from '../pictures/c1.png'
import c2 from '../pictures/c2.png'
import c3 from '../pictures/c3.png'
import c4 from '../pictures/c4.png'
import vector from '../pictures/Vector.png'
import back from '../pictures/back.png'
import loop from '../pictures/loop.png'
import Button from '@mui/material/Button';
import Link from "next/link";
const Know = () => {
  return (
    <>
      <Box sx={{ background: "white", padding: "0.7em 0em", backgroundImage: { xs: "none", lg: "none", xl: `url(${back.src})` }, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "auto" }}>
        <Box sx={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "0.5em" }}>
          <Typography sx={{ fontSize: { xs: "30px", sm: "55px" }, fontWeight: "700", color: "#DE930B", textAlign: "center" }}>DO YOU KNOW ?</Typography>
          <Image src={baby} width={50} style={{ position: "relative", bottom: "1em" }} />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-evenly" },
          gap: { xs: "90px", md: "40px", lg: "0px", xl: "0px" },
          flexWrap: { md: "wrap", xl: "nowrap !important", lg: "nowrap !important" },
          alignItems: "center", margin: { xs: "0em", xl: "6em 2em", lg: "6em 2em" }
        }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "flex-start", marginBottom: { xs: "0px", lg: "0px", xl: "0px" }, marginRight: { xs: "0px", md: "390px", lg: "0px" }, position: "relative", bottom: { xl: "199px", lg: "199px", xs: "0px" } }}>
            <Image src={rocket} width={120} />
            <Box sx={{
              width: { xs: "320px", lg: "250px", xl: "320px" },
              height: { xs: "220px", lg: "270px", xl: "220px" },
              backgroundColor: { xs: "rgba(248, 144, 21 , 0.69)", xl: "rgba(248, 144, 21)" },
              boxShadow: " 0px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px",
              position: "relative", padding: "0.5em 0.5em"
            }} >
              <Typography sx={{ textAlign: "center", marginTop: "1.4em", fontSize: "22px", fontWeight: "600", color: "#000" }}>Brain Chain</Typography>
              <Typography sx={{ textAlign: "start", fontSize: "17px", lineHeight: "21px", fontWeight: 400, color: "#fff" }}>Our nervous system is a big giant circuit
                of brain cells. These brain cells are called
                neurons. Synapses are a connection
                between these neurons that allows
                information to be passed.</Typography>
              <Box sx={{
                width: "100px",
                height: "100px",
                backgroundImage: `url(${c1.src})`, backgroundSize: "100% 100%",
                backgroundColor: "#fff",
                border: "3.16848px solid #F49D00",
                boxShadow: "-1.05616px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
              }}></Box>
            </Box>
          </Box>
          <Box sx={{
            width: { xs: "320px", lg: "250px", xl: "320px" },
            height: { xs: "220px", lg: "270px", xl: "220px" },
            backgroundColor: { xs: "rgba(248, 144, 21 , 0.69)", xl: "rgba(248, 144, 21)" },
            boxShadow: " 0px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px",
            position: "relative", marginBottom: { xs: "0px", lg: "-90px" }, marginLeft: { xs: "0px", md: "203px", lg: "0px" }, padding: "0.5em 0.5em"
          }} >
            <Typography sx={{ textAlign: "center", marginTop: "1.4em", fontSize: "22px", fontWeight: "600", color: "#000" }}>Brain Development</Typography>
            <Typography sx={{ textAlign: "start", fontSize: "17px", lineHeight: "21px", color: "#fff" }}>Initially a child’s brain is 25% of adult size
              which further becomes 80% by the age of
              3. The number of neurons remains
              relatively stable at this age, but each
              neuron grows, becoming bigger and
              heavier.</Typography>
            <Box sx={{
              width: "100px",
              height: "100px",
              backgroundImage: `url(${c2.src})`, backgroundSize: "100% 100%",
              backgroundColor: "#fff",
              border: "3.16848px solid #F49D00",
              boxShadow: "-1.05616px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
              position: "absolute",
              top: "-70px",
              left: "50%",
              transform: "translateX(-50%)",
            }}></Box>
          </Box>
          <Box sx={{
            width: { xs: "320px", lg: "250px", xl: "320px" },
            height: { xs: "220px", lg: "270px", xl: "220px" },
            backgroundColor: { xs: "rgba(248, 144, 21 , 0.69)", xl: "rgba(248, 144, 21)" },
            boxShadow: " 0px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px",
            position: "relative", marginTop: { xs: "0px", lg: "-243px", xl: "-227px" }, marginRight: { xs: "0px", md: "370px", lg: "0px" }, padding: "0.5em 0.5em"
          }}>
            <Typography sx={{ textAlign: "center", marginTop: "1.4em", fontSize: "22px", fontWeight: "600", color: "#000" }}>Growth of the Brain</Typography>
            <Typography sx={{ textAlign: "start", fontSize: "17px", lineHeight: "21px", color: "#fff" }}>Initially a child’s brain is 25% of adult size
              which further becomes 80% by the age of
              3. The number of neurons remains
              relatively stable at this age, but each
              neuron grows, becoming bigger and
              heavier.</Typography>
            <Box sx={{
              width: "100px",
              height: "100px",
              backgroundImage: `url(${c3.src})`, backgroundSize: "100% 100%",
              backgroundColor: "#fff",
              border: "3.16848px solid #F49D00",
              boxShadow: "-1.05616px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)",
              borderRadius: "50%",
              position: "absolute",
              top: "-70px",
              left: "50%",
              transform: "translateX(-50%)"
            }} ></Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", alignItems: "flex-end", gap: { xs: "20px", lg: "100px" }, marginLeft: { xs: "0px", md: "207px", lg: "0px !important", xl: "0px" }, position: "relative", bottom: { xs: "0px", lg: "0px !important", xl: "0px" } }}>
            <Image src={aero} width={70} />
            <Box sx={{
              width: { xs: "320px", lg: "250px", xl: "320px" },
              height: { xs: "220px", lg: "270px", xl: "220px" },
              backgroundColor: { xs: "rgba(248, 144, 21 , 0.69)", xl: "rgba(248, 144, 21)" },
              boxShadow: " 0px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px",
              position: "relative", padding: "0.5em 0.5em"
            }} >
              <Typography sx={{ textAlign: "center", marginTop: "1.4em", fontSize: "22px", fontWeight: "600", color: "#000" }}>Stonger Bonds</Typography>
              <Typography sx={{ textAlign: "start", fontSize: "17px", lineHeight: "21px", color: "#fff" }}>Every time the child has a new experience
                these synapses are formed. After the age
                of 3, the synapses used and reused
                repeatedly are stored and the brain
                eliminates connections that are seldom or
                never used.</Typography>
              <Box sx={{
                width: "100px",
                height: "100px",
                backgroundImage: `url(${c4.src})`, backgroundSize: "100% 100%",
                backgroundColor: "#fff",
                border: "3.16848px solid #F49D00",
                boxShadow: "-1.05616px 4.22463px 4.22463px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                position: "absolute",
                top: "-70px",
                left: "50%",
                transform: "translateX(-50%)",
              }}></Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: { xs: "10%", sm: "25%", lg: "37%" }, position: "relative", bottom: { xs: "-4em", lg: "0em", xl: "0em" } }}>
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Image src={vector} width={50} />
            <Image src={loop} width={100} style={{ position: "relative", right: "3em", top: "2em" }} />
          </Box>
          <Link href={{ pathname: '/Register', query: { price: 349 } }}><Button variant="contained" sx={{ background: "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)", borderRadius: "52.8079px", fontWeight: "700", color: "#000", fontSize: "17px", textTransform: "none", height: "70px", width: "170px", alignSelf: "center" }}>Register Now</Button></Link>
        </Box>
      </Box>
    </>
  );
}

export default Know;