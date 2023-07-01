import { Box, Typography } from "@mui/material";
import dr1 from '../pictures/dr1.png'
import dr2 from '../pictures/dr2.png'
import dr3 from '../pictures/dr3.png'
import dr4 from '../pictures/dr4.png'
import Image from "next/image";

const Gallery = () => {
   return (
      <>
         <Box sx={{ display: "flex", background: "#fff", justifyContent: "center", height: "100%", alignItems: "center", padding: "2em 2em ", flexWrap: { xl: "nowrap", xs: "wrap", lg: "nowrap !important" }, gap: { lg: "100px", xs: "25px", xl: "20px" } }}>
            <Box sx={{ width: { xs: "406.93px", lg: "220px", xl: "406.93px" }, height: "auto", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
               <Image src={dr1} width={300} className="image" />
               <Typography sx={{ color: "#F89015", fontWeight: "700", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Dr. Mani Varghese renowned early child development specialist</Typography>
               <Typography sx={{ color: " rgba(125, 118, 118, 0.88)", fontWeight: "500", fontSize: "14px", marginTop: "0.5em", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Global educational setup is in dire need of early cognizance, this program fills those shoes and nurtures babies for readiness to have a strong educational foundation. Baby learns fastest inprenatal and first 3 years,.....</Typography>
            </Box>
            <Box sx={{ width: { xs: "406.93px", lg: "220px", xl: "406.93px" }, height: "auto", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
               <Image src={dr2} width={300} className="image" />
               <Typography sx={{ color: "#F89015", fontWeight: "700", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Prof. Saroj Naidu, IIT Kharagpur</Typography>
               <Typography sx={{ color: " rgba(125, 118, 118, 0.88)", fontWeight: "500", fontSize: "14px", marginTop: "0.5em", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Childhood learning and cognizance at home are roots for success, this program is defined to give best for your baby and awaken their hidden genius. I believe this will surely help the generations, and aware parents will get most benefits from this program to enable Genius.</Typography>
            </Box>
            <Box sx={{ width: { xs: "406.93px", lg: "220px", xl: "406.93px" }, height: "auto", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
               <Image src={dr3} width={300} className="image" />
               <Typography sx={{ color: "#F89015", fontWeight: "700", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Simran Sidhu , IIT Roorkee, AI & Ml Engineer (USA)</Typography>
               <Typography sx={{ color: " rgba(125, 118, 118, 0.88)", fontWeight: "500", fontSize: "14px", marginTop: "0.5em", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Childhood learning is really helpful.My learning have helped me to Top state twice and win many prestigious awards. I have contributed to development of AI for researchers and this program. This project was very personal to me.</Typography>
            </Box>
            <Box sx={{ width: { xs: "406.93px", lg: "220px", xl: "406.93px" }, height: "auto", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
               <Image src={dr4} width={300} className="image" />
               <Typography sx={{ color: "#F89015", fontWeight: "700", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Dr Daizy Zukerberg Google for Kids</Typography>
               <Typography sx={{ color: " rgba(125, 118, 118, 0.88)", fontWeight: "500", fontSize: "14px", marginTop: "0.5em", width: { xs: "320px", xl: "320px", lg: "250px" } }}>Initial Brain development of your baby is way more important
                  than whatever education you provide to your child. You can set
                  up the foundation in first 3 years, at Uptodd more than 1000+
                  experts added their experience to give your child special ....</Typography>
            </Box>
         </Box>
      </>
   );
}

export default Gallery;