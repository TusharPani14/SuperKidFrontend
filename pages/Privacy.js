import Navbar from "@/components/Navbar";
import { Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material"
import theme from "@/styles/theme"

export default function Privacy() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Navbar/>
      <Stack
        sx={{
          backgroundColor: "#E7E6E4",
          minHeight: "100vh",
          color: "black",
          padding: {xs:"8vmax 4vmax",sm:"8vmax 8vmax"},
          gap:"15px",
        }}
      >
        <Typography sx={{fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",fontSize:{xs:"30px",sm:"35px",lg:"50px"}}}>Privacy Policy</Typography>
        <Typography variant="body2" sx={{fontWeight:"700",color:"#3E424B",letterSpacing:"1px"}}>Effective Date: 1/1/2023</Typography>
        <Typography  sx={{maxWidth:"80vw",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
          Thank you for choosing SuperKid.co.in. We value the privacy and
          security of our users' personal information. This Privacy Policy
          outlines how we collect, use, and protect the information you provide
          while using our platform. Please read this policy carefully to
          understand our practices regarding your personal data.
        </Typography>
        <Stack sx={{maxWidth:{xs:"95vw",sm:"80vw"},gap:"20px",backgroundColor:"white",padding:{xs:"20px 30px",sm:"30px 45px"}}}>
        <Stack sx={{gap:"15px"}}>
          <Typography    sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>1. Information We Collect</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Personal Information: When you register an account on
                SuperKid.co.in, we may collect personal information such as your
                name, email address, contact number, and billing details. We
                only collect this information when voluntarily provided by you.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Usage Data: We automatically collect certain information when
                you visit our website or use our services, including your IP
                address, browser type, operating system, device information, and
                usage statistics. This data helps us analyze user behavior,
                improve our services, and enhance the user experience.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Cookies and Tracking Technologies: We use cookies and similar
                tracking technologies to collect information about your browsing
                activities on our website. Cookies are small files stored on
                your device that allow us to recognize and remember your
                preferences. You can modify your browser settings to control the
                use of cookies or delete them entirely, although this may affect
                certain features of our website.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>2. Use of Information</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Providing and Improving Services: We use the collected
                information to deliver and personalize our services, respond to
                your inquiries, process payments, and provide technical support.
                We also use this information to analyze and enhance our
                services, develop new features, and improve the overall user
                experience.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Communication: We may use your contact information to send you
                administrative messages, updates about our services,
                newsletters, marketing communications, and promotional offers.
                You can opt-out of receiving marketing communications at any
                time by following the instructions provided in the communication
                or contacting us directly.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                Legal Compliance: We may disclose your personal information if
                required by law, government authorities, or to protect our legal
                rights, enforce our Terms of Service, or investigate potential
                violations or fraudulent activities.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>3. Third-Party Links</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Our website may contain links to third-party websites or
                services that are not operated or controlled by SuperKid.co.in.
                This Privacy Policy does not cover the practices of such third
                parties. We encourage you to review the privacy policies of
                those third parties before providing any personal information.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>4. Children's Privacy</Typography>
          <ul>
            <li>
              <Typography sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                Protecting the privacy of children is important to us. Our
                services are intended for users above the age of 13. If we
                become aware that we have collected personal information from
                children under the age of 13 without parental consent, we will
                take steps to delete that information.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>5. Updates to Privacy Policy</Typography>
          <ul>
            <li>
              <Typography sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                SuperKid.co.in reserves the right to modify or update this
                Privacy Policy at any time. Any changes made will be effective
                immediately upon posting on our website. We encourage you to
                review this policy periodically to stay informed about any
                updates.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}} >6. Contact Us</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                If you have any questions or concerns regarding our Privacy
                Policy, or if you would like to exercise your rights regarding
                your personal information, please contact our Data Protection
                Officer at [insert contact details]. By using SuperKid.co.in,
                you signify your acceptance of this Privacy Policy. If you do
                not agree with this policy, please refrain from using our
                platform.
              </Typography>
            </li>
          </ul>
        </Stack>
        </Stack>
      </Stack>
      </ThemeProvider>
    </>
  );
}
