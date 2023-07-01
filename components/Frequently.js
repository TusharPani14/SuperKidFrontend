import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import bg from '../pictures/bg.png'
import bulb from '../pictures/bulb.png'
import globe from '../pictures/globe.png'
import prof from '../pictures/prof.png'
import starss from '../pictures/starss.png'
import Image from 'next/image';
import Button from '@mui/material/Button'
import Link from 'next/link';
const Frequently = () => {
  return (
    <>
      <Box sx={{
        height: "100%", backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column", padding: "2em 0.7em ",
        backgroundColor: "#fccc99"
      }}>
        <Typography sx={{ color: ' #fff', fontWeight: "700", fontSize: { xs: "30px", sm: "35px", md: "40px", xl: "45px" }, alignSelf: "center" }}>FREQUENTLY ASKED QUESTIONS</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Image src={bulb} width={65} style={{ position: "relative", right: "2em" }} />
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "1.5em" }}>
            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>What is Super Kids?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  The goal of the parenting company Super Kid, which has offices in both India and the United States, is to assist all parents in the globe in identifying and developing their children's fullest abilities and potential. The business serves parents in more than 150 countries thus far using a patented system of 15-minute daily activities.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>What will be the format of this program?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  This is our introductory, first-level programme, which is run entirely by our young Experts. You will receive educational movies and a selection of playthings to try out with your infant or toddler. In the online community, you can converse with other parents in your cohort, ask them questions, and share your experiences. Your mobile device or laptop will have access to all of the information, community, and videos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>Who develops the programs and activities?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  A varied international team of early childhood educators, pediatricians, engineers, and professionals develops our programmes and activities. You can be certain of the effectiveness and advantages of the activities because each one goes through five rounds of filtering before being chosen to be a part of the Prodigy Framework system.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>Are your activities screenfree?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  Yes, your child/children do not have any screen time. We give the parent video instructions. They watch the videos, absorb the lessons, and then engage in the activities with their kids.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>What kind of results can I expect with the Super Kids system?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  The system is made to assist in identifying and developing your child's intrinsic abilities and potential. We support the kid in accelerating the development of concrete, observable skills that pave the way for a lifetime of exceptional abilities. These abilities include early crawling, early walking, mental maths, reading, communication, and social skills, as well as superior memory development and reasoning and critical thinking. Over the course of the trip with the framework, our children have also continued to appear in numerous record books.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className='accordian' sx={{ background: "#F89015" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <AddIcon sx={{ color: "#fff" }} />
                <Typography sx={{ color: "#fff", marginLeft: "1em", fontWeight: "700" }}>How do I get started?</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ width: { xl: "900px", lg: "900px", md: "100%" } }}>
                <Typography sx={{ color: "#fff" }}>
                  Simply sign up for our upcoming cohort, and we'll send you all the information you need by email and WhatsApp. (Note: WhatsApp is not a mandatory requirement to do this program  - we only use it to deliver reminder alerts).
                </Typography>
              </AccordionDetails>
            </Accordion>

          </Box>
        </Box>
        <Typography sx={{ color: ' #fff', fontWeight: "700", fontSize: { xs: "30px", sm: "35px", md: "40px", xl: "40px" }, alignSelf: "center", marginTop: "1.5em" }}>We keep getting love from Super Kids worldwide</Typography>
        <Box sx={{ display: "flex", width: '80%', justifyContent: "center", alignItems: "center", gap: "40px", marginTop: "2em", flexWrap: "wrap" }}>
          <Box sx={{ background: "#F89015", boxShadow: "6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px", width: "285px", height: "285px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <Image src={globe} width={100} />
            <Typography sx={{ color: "white", fontWeight: "600", fontSize: "25px" }}>158+ Countries</Typography>
          </Box>
          <Box sx={{ background: "#F89015", boxShadow: "6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px", width: "285px", height: "285px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <Image src={prof} width={100} />
            <Typography sx={{ color: "white", fontWeight: "600", fontSize: "25px" }}>100K+ Happy Parents</Typography>
          </Box>
          <Box sx={{ background: "#F89015", boxShadow: "6.33695px 7.39311px 5.28079px rgba(0, 0, 0, 0.25)", borderRadius: "21.1232px", width: "285px", height: "285px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <Image src={starss} width={100} />
            <Typography sx={{ color: "white", fontWeight: "600", fontSize: "25px" }}>4.5+ App Rating</Typography>
          </Box>
        </Box>
        <Link href={{ pathname: '/Register', query: { price: 349 } }}> <Button variant="contained" sx={{ background: "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)", borderRadius: "52.8079px", fontWeight: "700", color: "#000", fontSize: "14px", textTransform: "none", height: "40px", width: "auto", padding: "0 2em", alignSelf: "center", marginTop: "3em" }}>Start Your Journey Now</Button></Link>
      </Box>
    </>
  );
}

export default Frequently;