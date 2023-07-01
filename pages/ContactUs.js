import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Stack, Box, Typography, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab";
import Image from "next/image";
import banner from '../pictures/banner.png'
import styles from '../styles/ContactUs.module.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import { Height } from "@mui/icons-material";
const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const submit = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }
    return (
        <>
            <Box className={styles.container}>
                <Navbar className={styles.navbar} />
                <Stack alignItems="center">
                    <Box sx={
                        {
                            marginTop: { xs: "10vh" },
                        }
                    }>
                        <Image src={banner} style={{ width: "100%" }} />
                    </Box>
                    <Box className={styles.contactInfo} margin={10}>
                        <Stack alignItems="center" justifyContent="center" gap="10px">
                            <Stack sx={{ direction: { xs: "column", md: "row" } }} gap="20px">
                                <Box className={styles.contact}>
                                    <WhatsAppIcon fontSize="large" style={{ color: "#00C881" }} />
                                    <Typography sx={{ color: "#000000", fontWeight: "500" }}>
                                        Let's Chat<br />
                                        <Typography component="span" sx={{ color: "#564F62" }}>
                                            will reply in 2hrs
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box className={styles.contact}>
                                    <EmailIcon fontSize="large" style={{ color: "#000000" }} />
                                    <Typography sx={{ color: "#000000", fontWeight: "500" }}>
                                        Vishalraina@superkid.co.in<br />
                                        <Typography component="span" sx={{ color: "#564F62" }}>
                                            will reply in 24hrs
                                        </Typography>
                                    </Typography>
                                </Box>
                            </Stack>
                            <Typography sx={{ color: "#564F62" }}>We are available on all days between 10 AM to 7PM</Typography>
                        </Stack>
                    </Box>
                    <Box className={styles.details}
                        sx={{
                            display: {
                                xs: "Stack",
                                md: "grid"
                            }
                        }}
                        gridTemplateColumns="repeat(12, 1fr)"
                    >
                        <Box gridColumn="span 7">
                            <Stack>
                                <Typography sx={{ color: "#00C881", fontWeight: "600", fontSize: "20px" }}>We are at</Typography>
                                <Box className={styles.location}>
                                    <LocationOnIcon sx={{ fontSize: { xs: "small", sm: "medium", md: "large" } }} style={{ color: "#3D3DC5" }} />
                                    <Typography sx={{ color: "#003975", fontSize: { xs: "7px", sm: "15px", md: "12px" } }}>
                                        3rd Floor, Cowork Valley, MMS Divya Diamonds Junction,<br />
                                        Kavuri Hills Phase 2 Rd, Hyderabad,<br />
                                        Telangana 500033
                                    </Typography>
                                </Box>
                                <div className={styles.mapouter}>
                                    <div className={styles.gmap_canvas}>
                                        <iframe className={styles.gmap_iframe} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Jiraaf&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        </iframe>
                                        <a href="https://capcuttemplate.org/">
                                            Capcut Templates
                                        </a>
                                    </div>
                                </div>
                            </Stack>
                        </Box>
                        <Box className={styles.form} gridColumn="span 5">
                            <Stack gap={3}>
                                <Typography sx={{ color: "#00C881", fontWeight: "600", fontSize: "20px" }}>Write to us</Typography>
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Enter Your Name"
                                    variant="outlined"
                                    fullWidth="true"
                                />
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Enter Your Email"
                                    variant="outlined"
                                    fullWidth="true"
                                />
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Enter Your Phone Number"
                                    variant="outlined"
                                    fullWidth="true"
                                />
                                <TextField
                                    required
                                    id="outlined-basic"
                                    label="Enter Your Message"
                                    variant="outlined"
                                    fullWidth="true"
                                    multiline
                                    rows={4}
                                />
                                <LoadingButton
                                    loading={loading}
                                    variant="contained"
                                    onClick={() => submit()}
                                    fullWidth={true}
                                    sx={{ fontSize: "16px", background: "#F85415" }}
                                >
                                    Send Message
                                </LoadingButton>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
                <Footer />
            </Box>
        </>
    )
}

export default ContactUs