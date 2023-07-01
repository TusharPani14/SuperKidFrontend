import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import log from "../pictures/LOGO.png";
import Link from "next/link";

export default function CredInfo() {
  //const storedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FEE7C3",
          padding: { sm: "20px", xs: "20px" },
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            width: "100vw",
            padding: "0 40px",
            alignItems: "center",
          }}
        >
          <Image src={log} width={150} />
          <Link href="/ContactUs">
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)",
                borderRadius: "52.8079px",
                fontWeight: "700",
                color: "#000",
                fontSize: "14px",
                textTransform: "none",
                width: "auto",
                padding: "10px 13px",
                alignSelf: "center",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </Stack>
        <Stack
          color="black"
          sx={{
            gap: "30px",
            margin: "35px 20px",
            width: "fit-content",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{ fontSize: { xs: "25px", sm: "36px", lg: "48px" } }}
          >
            Login Credentials
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "22px", lg: "28px" } }}
          >
            Please use these credentials to log in on the app.
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontSize: { xs: "16px", sm: "22px", lg: "28px" } }}
          >
            We will send these credentials on your email and WhatsApp.
          </Typography>
          <Stack
            sx={{
              backgroundColor: "#F9A13D",
              width: { sm: "500px", xs: "300px" },
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, .2)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", sm: "22px", lg: "28px" },
                fontWeight: "700",
              }}
            >
            Email:rainav277@gmail.com
              {/* Email: {storedUser?.email} */}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", sm: "22px", lg: "28px" },
                fontWeight: "700",
              }}
            >
              Password:Superkid@123
              {/* Password: {storedUser?.password} */}
            </Typography>
          </Stack>
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.kilope.prokid"
          >
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)",
                borderRadius: "52.8079px",
                fontWeight: "700",
                color: "#000",
                fontSize: { xs: "16px", sm: "20px", lg: "24px" },
                textTransform: "none",
                width: "auto",
                padding: "10px 16px",
                alignSelf: "center",
              }}
            >
              App Link
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
