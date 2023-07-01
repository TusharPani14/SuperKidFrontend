import styles from "../styles/Home.module.css";
import { Box, Stack, Typography, Divider, TextField } from "@mui/material";
import Link from "next/link";
import DoneIcon from "@mui/icons-material/Done";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const submit = async () => {
    //setLoading(true);
    const { data } = await axios.post(
      "http://ec2-44-204-156-29.compute-1.amazonaws.com:8080/api/register/",
      {
        username: fullName,
        phone: phoneNo,
        email,
        childAge: age,
        selectedPrice,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (data.success === true) {
      localStorage.setItem('user', JSON.stringify(data.user));
      console.log(data.paymentResponse.data.instrumentResponse.redirectInfo.url);
      window.location.href = data.paymentResponse.data.instrumentResponse.redirectInfo.url
    }
    setLoading(false);
  };

  const router = useRouter();
  const query = router.query;
  const [selectedPrice, setSelectedPrice] = useState(
    query.price ? query.price : "349"
  );

  const handleChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <>
      <Box className={styles.container} style={{ height: "100vh" }}>
        <Box className={styles.kid}>
          <Link href="/">
            <Typography component="span" className={styles.super}>
              Super
            </Typography>
            Kid
          </Link>
        </Box>
        <Box
          className={styles.content}
          sx={{
            display: {
              xs: "stack",
              sm: "stack",
              md: "grid",
            },
          }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={6}
        >
          <Stack gridColumn="span 6" gap={2}>
            <Typography
              className={styles.heading}
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "30px",
                },
              }}
            >
              The best{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                parenting Platform{" "}
              </Typography>
              with trainings, tools, Activities & Support to{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                maximize{" "}
              </Typography>
              your baby’s hidden{" "}
              <Typography
                component="span"
                className={styles.highlight}
                sx={{ fontSize: { xs: "20px", sm: "30px" } }}
              >
                potential!
              </Typography>
            </Typography>
            <Divider></Divider>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Break the limits of your child.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Created by experts. Alums of IIT Roorkee.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              High-interest, activities that will awaken the true potential.
            </Typography>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              <DoneIcon
                sx={{
                  marginRight: { xs: 1, sm: 2 },
                  fontSize: { xs: "10px", sm: "20px" },
                }}
              ></DoneIcon>
              Join us in shaping the future of education.
            </Typography>
            <Divider></Divider>
            <Typography
              className={styles.points}
              sx={{ fontSize: { xs: "11px", sm: "18px" } }}
            >
              🎉 Watch your super Kid grow with superpowers
            </Typography>
          </Stack>
          <Box className={styles.form} gridColumn="span 5">
            <Stack gap={2}>
              <Typography
                variant="h5"
                className={styles.register}
                sx={{ fontSize: { xs: "20px" } }}
              >
                Register Now
              </Typography>
              <TextField
                required
                id="outlined-basic"
                label="Your Full Name"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Your E-mail"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                required
                id="outlined-basic"
                label="Your Child's age"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />

              <Stack className={styles.price} direction="row">
                <ShoppingCartIcon
                  sx={{ marginRight: { xs: 1 }, fontSize: { xs: "20px" } }}
                ></ShoppingCartIcon>
                <Typography>
                  <Typography component="span" sx={{ fontWeight: 600 }}>
                    Total:{" "}
                  </Typography>
                  INR {999} ONLY
                </Typography>
              </Stack>
              <LoadingButton
                loading={loading}
                variant="contained"
                onClick={() => submit()}
                fullWidth={true}
                sx={{ fontSize: "16px", background: "#F85415" }}
              >
                Pay now to help your child grow
              </LoadingButton>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
