import Footer from "@/components/Footer";
import About from "@/components/about";
import SimpleAccordion from "@/components/accordion";
import Main from "@/components/main";
import { ThemeProvider } from "@mui/material"
import theme from "@/styles/theme"
const Nextpage = () => {
    return ( 
        <>
        <ThemeProvider theme={theme}>
        <Main/>
        <About/>
        <SimpleAccordion/>
        <Footer/>
        </ThemeProvider>
        </>
     );
}
 
export default Nextpage;