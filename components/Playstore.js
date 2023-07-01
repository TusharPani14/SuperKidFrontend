import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import gp from "../pictures/gp.png";
import app from "../pictures/app.png";
import mother from "../pictures/mother.png";
import phone from "../pictures/phone.png";
import aims from "../pictures/aims.png";
import mit from "../pictures/mit.png";
import iit from "../pictures/iit.png";
import doll from "../pictures/doll.png";
import Button from "@mui/material/Button";
import wave from "../pictures/wave.png";
const Playstore = () => {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "2em 0.7em ",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: " #E2A02A",
            fontWeight: "700",
            fontSize: { xs: "30px", sm: "40px", md: "45px", xl: "55px" },
            alignSelf: "center",
          }}
        >
          Join the Super parents Today
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "100px", xl: "300px" },
            flexWrap: "wrap-reverse",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: { xs: "100%", md: "580px" },
              gap: "5px",
              // position: "relative",
              bottom: { lg: "0em", xs: "10em" },
            }}
          >
            <Typography
              sx={{
                color: "#DE930B",
                fontWeight: "500",
                fontSize: { xs: "20px", sm: "30px", md: "35px", xl: "45px" },
                lineHeight: "50px",
              }}
            >
              Download Super Kids App and make your kid face the challenges
            </Typography>
            <Typography
              sx={{
                color: "#455A64",
                fontWeight: "400",
                fontSize: { xs: "18px", sm: "18px", md: "20px", xl: "30px" },
                lineHeight: "45px",
              }}
            >
              Screenfree activities to develop your 0-6 year old baby, toddler
              or child’s fundamental skills and abilities for life using 5
              minutes A Day, Prodigy Framework™!
            </Typography>
            <Typography
              sx={{
                color: "#323232",
                fontWeight: "400",
                fontSize: { xs: "18px", sm: "18px", md: "20px", xl: "30px" },
                lineHeight: "45px",
                marginTop: "2.2em",
              }}
            >
              Download the App and get add on benefits
            </Typography>
            <Box sx={{ display: "flex", marginTop: "1em", gap: "10px" }}>
              <Link href='https://play.google.com/store/apps/details?id=com.kilope.prokid'>  <Image src={gp} width={150} /> </Link>  <Image src={app} width={150} />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "relative",
              top: { lg: "0em", xs: "4em" },
            }}
          >
            <Box
            >
              {" "}
              <Image
                src={mother}
                width={300}
              // style={{ position: "relative", bottom: "1em" }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '5rem'
          }}
        >
          <Typography
            sx={{
              color: "#DE930B",
              fontWeight: "700",
              fontSize: { xs: "30px", sm: "40px", md: "45px", xl: "55px" },
              alignSelf: "center",
            }}
          >
            Curators are from prestigious institutes
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "40px", sm: "100px" },
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Image src={aims} width={300} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#DE930B",
                }}
              >
                AIIMS
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Image src={mit} width={300} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#DE930B",
                  transform: 'translateY(4.5rem)'
                }}
              >
                MIT USA
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Image src={iit} width={300} />
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "30px",
                  color: "#DE930B",
                }}
              >
                IIT ROORKEE
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4em",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "#DE930B",
                fontWeight: "700",
                fontSize: { xs: "30px", sm: "40px", md: "45px", xl: "55px" },
                alignSelf: "center",
              }}
            >
              Pricing
            </Typography>
            <Image src={doll} width={100} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2em 1em",
                backgroundImage: `url(${wave.src})`,
                backgroundPosition: "center",
                background: [
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%)`,
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%), url(${wave.src})`,
                ],
                backgroundSize: "cover",
                width: " 300px",
                height: "400px",
                boxShadow: " 8px 7px 9px rgba(0, 0, 0, 0.3)",
                borderRadius: "19px",
              }}
            >
              <Typography
                sx={{ color: "#f89622", fontSize: "25px", fontWeight: "700" }}
              >
                1 Month
              </Typography>
              <Box
                sx={{ position: "relative", width: "80px", marginTop: "0.5em" }}
              >
                <Typography
                  sx={{ color: "#000", fontSize: "35px", fontWeight: "600" }}
                >
                  459
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "50%",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(to right, transparent, #DE930B)",
                    transform: "rotate(-25deg)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                349/month
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.7em",
                }}
              >
                Brain Chain
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Brain Development
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Growth of the Brain
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href={{
                    pathname: '/Register',
                    query: { price: 349 }
                  }}
                ><Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)",
                    borderRadius: "52.8079px",
                    fontWeight: "700",
                    color: "#000",
                    fontSize: "14px",
                    textTransform: "none",
                    height: "40px",
                    width: "170px",
                    alignSelf: "center",
                    marginTop: "2em",
                  }}
                >
                    Subscribe Now
                  </Button></Link></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2em 1em",
                backgroundImage: `url(${wave.src})`,
                backgroundPosition: "center",
                background: [
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%)`,
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%), url(${wave.src})`,
                ],
                backgroundSize: "cover",
                width: { xs: "300px", lg: "380px" },
                height: { xs: "400px", lg: "440px" },
                boxShadow: " 8px 7px 9px rgba(0, 0, 0, 0.3)",
                borderRadius: "19px",
              }}
            >
              <Typography
                sx={{ color: "#f89622", fontSize: "25px", fontWeight: "700" }}
              >
                3 Months
              </Typography>
              <Box
                sx={{ position: "relative", width: "80px", marginTop: "0.5em" }}
              >
                <Typography
                  sx={{ color: "#000", fontSize: "35px", fontWeight: "600" }}
                >
                  1377
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "50%",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(to right, transparent, #DE930B)",
                    transform: "rotate(-25deg)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                250/ month
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.7em",
                }}
              >
                Brain Chain
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Brain Development
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Growth of the Brain
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Stronger Bonds
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href={{
                    pathname: '/Register',
                    query: { price: 250 }
                  }}
                ><Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)",
                    borderRadius: "52.8079px",
                    fontWeight: "700",
                    color: "#000",
                    fontSize: "14px",
                    textTransform: "none",
                    height: "40px",
                    width: "170px",
                    alignSelf: "center",
                    marginTop: { xl: "2em", lg: "1.5em", xs: "1em" },
                  }}
                >
                    Subscribe Now
                  </Button></Link>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "2em 1em",
                backgroundImage: `url(${wave.src})`,
                backgroundPosition: "center",
                background: [
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%)`,
                  `linear-gradient(183.91deg, rgba(247, 181, 102, 0) 18.18%, #F89015 96.8%), url(${wave.src})`,
                ],
                backgroundSize: "cover",
                width: " 300px",
                height: "400px",
                boxShadow: " 8px 7px 9px rgba(0, 0, 0, 0.3)",
                borderRadius: "19px",
              }}
            >
              <Typography
                sx={{ color: "#f89622", fontSize: "25px", fontWeight: "700" }}
              >
                6 Months
              </Typography>
              <Box
                sx={{ position: "relative", width: "80px", marginTop: "0.5em" }}
              >
                <Typography
                  sx={{ color: "#000", fontSize: "35px", fontWeight: "600" }}
                >
                  2754
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "50%",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(to right, transparent, #DE930B)",
                    transform: "rotate(-25deg)",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "30px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                200/ month
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.7em",
                }}
              >
                Brain Chain
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Brain Development
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "0.5em",
                }}
              >
                Growth of the Brain
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link
                  href={{
                    pathname: "/Register",
                    query: { price: 200 }
                  }}
                ><Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(0deg, #F29808 0.01%, #F5AA2F 30.01%, #FAC567 77%, #FCD07E 100%)",
                    borderRadius: "52.8079px",
                    fontWeight: "700",
                    color: "#000",
                    fontSize: "14px",
                    textTransform: "none",
                    height: "40px",
                    width: "170px",
                    alignSelf: "center",
                    marginTop: "2em",
                  }}
                >
                    Subscribe Now
                  </Button></Link></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Playstore;
