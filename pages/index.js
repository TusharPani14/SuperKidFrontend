import Everybody from "@/components/Everybody";
import Footer from "@/components/Footer";
import Frequently from "@/components/Frequently";
import Gallery from "@/components/Gallery";
import Know from "@/components/Know";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Playstore from "@/components/Playstore";
import { ThemeProvider } from "@mui/material"
import theme from "@/styles/theme"
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Landing />
        <Know />
        <Everybody />
        <Playstore />
        <Frequently />
        <Gallery />
        <Footer />
      </ThemeProvider>
    </>
  )
}
