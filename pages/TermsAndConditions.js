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
        <Typography sx={{fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",fontSize:{xs:"30px",sm:"35px",lg:"50px"}}}>Terms and Conditions</Typography>
        <Typography variant="body2" sx={{fontWeight:"700",color:"#3E424B",letterSpacing:"1px"}}>Effective Date: 01/01/2023</Typography>
        <Typography  sx={{maxWidth:"80vw",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
            Thank you for choosing SuperKid.co.in. 
            These Terms and Conditions govern your use of our educational platform and services. 
            By accessing or using SuperKid.co.in, you agree to comply with these terms. 
            Please read these terms carefully before using our platform.
        </Typography>
        <Stack sx={{maxWidth:{xs:"95vw",sm:"80vw"},gap:"20px",backgroundColor:"white",padding:{xs:"20px 30px",sm:"30px 45px"}}}>
        <Stack sx={{gap:"15px"}}>
          <Typography    sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>1. User Obligations</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Eligibility: By accessing and using SuperKid.co.in, 
                you affirm that you are at least 18 years old or have the legal capacity to enter into a binding agreement. 
                If you are accessing our platform on behalf of a minor, you are responsible for supervising their use and 
                ensuring their compliance with these terms.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                User Account: To access certain features and services on SuperKid.co.in, 
                you may be required to create an account. 
                You are responsible for maintaining the confidentiality of your account credentials and are 
                solely responsible for all activities that occur under your account.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                User Conduct: You agree to use SuperKid.co.in for lawful purposes and in compliance with applicable laws and regulations. 
                You must not engage in any activity that may disrupt or interfere with the operation or security of our platform or violate 
                the rights of others.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>2. Intellectual Property</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Ownership: All intellectual property rights, including copyrights, trademarks, and patents, 
                associated with SuperKid.co.in, its content, and services are owned by SuperKid.co.in or its licensors. 
                You may not reproduce, modify, distribute, or use our intellectual property without prior written consent.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                User Content: By uploading or submitting any content on SuperKid.co.in, you grant SuperKid.co.in a non-exclusive, 
                royalty-free, worldwide license to use, modify, reproduce, and distribute that content for the purpose of providing 
                our services and improving the user experience.
              </Typography>
            </li>
            <br/>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>3. Payment and Subscriptions</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Fees: Some features or services on SuperKid.co.in may require payment. 
                You agree to pay all applicable fees and charges associated with your use of those features or services. 
                Fees are non-refundable unless otherwise specified in our Refund Policy.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Subscriptions: If you subscribe to a paid service or membership plan, your subscription will automatically renew until canceled. 
                You are responsible for canceling your subscription before the renewal date to avoid additional charges.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>4. Limitation of Liability</Typography>
          <ul>
            <li>
              <Typography sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                    Disclaimer: SuperKid.co.in strives to provide accurate and reliable information and educational content. 
                    However, we do not warrant or guarantee the accuracy, completeness, or reliability of the content on our platform. 
                    The use of SuperKid.co.in is at your own risk.
              </Typography>
            </li>
            <br/>   
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                Indemnification: You agree to indemnify and hold SuperKid.co.in, its affiliates, officers, 
                directors, employees, and agents harmless from any claims, damages, liabilities, and expenses arising out of 
                or related to your use of SuperKid.co.in, violation of these terms, or infringement of any third-party rights.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>5. Governing Law and Dispute Resolution</Typography>
          <ul>
            <li>
              <Typography sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                    Governing Law: These terms and your use of SuperKid.co.in shall be governed by and construed in accordance with the laws of 
                    [Insert Country/Region]. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction 
                    of the courts in [Insert Jurisdiction].
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}} >6. Amendments to Terms and Conditions</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                SuperKid.co.in reserves the right to modify or update these Terms and Conditions at any time without prior notice. 
                The updated terms will be effective immediately upon posting on our website. Your continued use of SuperKid.co.in after 
                the changes indicates your acceptance of the modified terms.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}} >7. Contact Us</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at [insert contact details].<br/>
                By using SuperKid.co.in, you signify
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
