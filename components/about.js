'use client'
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import MultiCarousel from "./carousel";
import aims from '/pictures/aims.png'
import mit from '/pictures/mit.png'
import iit from '/pictures/iit.png'
import star1 from '/pictures/star1.png'


export default function About() {
    return (
        <div>
            <Box padding="20px" sx={{ background: "#fff" }}>
                <Stack alignItems="center" justifyContent="space-around" direction="coloumn" gap="20px" sx={{ flexWrap: { lg: "nowrap", xs: "wrap" } }}>
                    <Stack alignItems="center" sx={{ width: "fit-content" }}>
                        <Image src={aims} height={150} width={150} />
                        <Typography variant="h4" color="initial" sx={{ color: "#DE930B", fontSize: "25px", fontWeight: "700" }}>AIIMS</Typography>
                    </Stack>
                    <Stack alignItems="center" width="fit-content">
                        <Image src={mit} height={120} width={150} />
                        <Typography variant="h4" color="initial" sx={{ color: "#DE930B", fontSize: "25px", fontWeight: "700" }}>MIT USA</Typography>
                    </Stack>
                    <Stack alignItems="center" width="fit-content">
                        <Image src={iit} height={150} width={150} />
                        <Typography variant="h4" color="initial" sx={{ color: "#DE930B", fontSize: "25px", fontWeight: "700" }}>IIT ROORKIE</Typography>
                    </Stack>
                </Stack>
                <Stack justifyContent="center" direction="coloumn" gap="15px" marginTop="30px">
                    <Image src={star1} height={60} width={60} />
                    <Stack textAlign="center">
                        <Typography variant="h4" sx={{ color: "#DE930B", fontSize: { lg: "40px", sm: "30px", xs: "25px" }, fontWeight: "700", marginBottom: "15px" }}>Everybody loves Super Kids</Typography>
                        <Typography variant="h4" sx={{ color: "#030A21", fontSize: { lg: "20px", sm: "15px", xs: "12px" }, fontWeight: { xs: "700" } }}>Watch what real parents, just like you, from
                            around the world are saying about our programs.</Typography>
                    </Stack>
                </Stack>
                <MultiCarousel />
            </Box>
        </div>
    )
}