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
        <Typography sx={{fontWeight:"700",letterSpacing:"2px",textTransform:"uppercase",fontSize:{xs:"30px",sm:"35px",lg:"50px"}}}>Refund Policy</Typography>
        <Typography variant="body2" sx={{fontWeight:"700",color:"#3E424B",letterSpacing:"1px"}}>Effective Date: 1/1/2023</Typography>
        <Typography  sx={{maxWidth:"80vw",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
        Thank you for choosing SuperKid.co.in. We are committed to providing an exceptional learning experience to our users. However, we understand that there may be situations where a refund is required. This Refund Policy outlines the terms and conditions governing refunds for purchases made from SuperKid.co.in. Please read this policy carefully before making a purchase.
        </Typography>
        <Stack sx={{maxWidth:{xs:"95vw",sm:"80vw"},gap:"20px",backgroundColor:"white",padding:{xs:"20px 30px",sm:"30px 45px"}}}>
        <Stack sx={{gap:"15px"}}>
          <Typography    sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>1. Refund Eligibility</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"},marginBottom:"5px"}}>
              Subscription Refunds: We offer refunds on subscription purchases made on SuperKid.co.in under the following circumstances:
              </Typography>
              <Stack gap="5px">
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                (i) Technical Issues: If you experience technical issues that prevent you from accessing or using our platform and our support team is unable to resolve the issue within a reasonable timeframe.
                    </Typography>
                    <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                   (ii) Dissatisfaction with Service: If you are dissatisfied with the quality of our services within the first 7 days of your subscription purchase. In such cases, we may ask for specific feedback to improve our services.
                    </Typography>
              </Stack>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"},marginBottom:"5px"}}>
              Course Refunds: We offer refunds on individual course purchases made on SuperKid.co.in if the following conditions are met:
              </Typography>
              <Stack gap="5px">
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                (i) Technical Issues: If you encounter technical problems that hinder your ability to access or use the course material, and our support team is unable to resolve the issue within a reasonable timeframe.
                    </Typography>
                    <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                   (ii) Dissatisfaction with Course: If you are unsatisfied with the content or delivery of the course within the first [number of days, e.g., 7 days] of your purchase. We may ask for specific feedback to help us enhance the learning experience for our users.

                    </Typography>
              </Stack>
            </li>
            <br/>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>2. Refund Process</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
              How to Request a Refund: To request a refund, please contact our customer support team at vishalraina@superkid.co.in] with your purchase details and a brief explanation of the reason for the refund. Our team will review your request and guide you through the refund process.
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
              Refund Consideration: Refund requests will be reviewed on a case-by-case basis. We may require additional information or documentation to evaluate your request
              </Typography>
            </li>
            <br/>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                Refund Approval and Processing: If your refund request is approved, we will process the refund within [number of days, e.g., 7 days] of approval. The refund will be issued to the original payment method used for the purchase.
              </Typography>
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>3. Non-Refundable Items</Typography>
          <ul>
            <li>
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"},marginBottom:"5px"}}>
              Certain products or services offered on SuperKid.co.in may be non-refundable. These include:
              </Typography>
              <Stack gap="5px">
              <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                (i)  E-books or digital downloads, once they have been accessed or downloaded.
                    </Typography>
                    <Typography  sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                   (ii) Third-party products or services purchased through SuperKid.co.in. Refunds for such items will be subject to the refund policy of the respective third-party provider.


                    </Typography>
              </Stack>
             
            </li>
          </ul>
        </Stack>
        <Stack sx={{gap:"15px"}}>
          <Typography  sx={{letterSpacing:"3px",fontWeight:"700",fontSize:{xs:"18px",sm:"22px",lg:"24px"}}}>4. Changes to Refund Policy</Typography>
          <ul>
            <li>
              <Typography sx={{color:"#3E424B",letterSpacing:"2px",fontSize:{xs:"14px",lg:"16px"}}}>
                {" "}
                SuperKid.co.in reserves the right to modify or update this Refund Policy at any time. Any changes made will be effective immediately upon posting on our website. We encourage you to review this policy periodically to stay informed about any updates.
If you have any questions or concerns regarding our refund policy, please contact our customer support team at [insert contact details]. We will be happy to assist you.

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
