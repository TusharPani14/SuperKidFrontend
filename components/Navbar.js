import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import logo from '/pictures/LOGO.png'
import Image from 'next/image';
import { styled } from '@mui/material';
import { useRouter } from 'next/router';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavList = styled('div')({
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isTransparent, setIsTransparent] = React.useState(true);
  const router = useRouter()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = function () {
        if (window.scrollY <= 200) {
          setIsTransparent(true);
        } else {
          setIsTransparent(false);
        }
      };
    }
  }, []);

  return (
    <AppBar position="fixed" sx={{ background: !isTransparent ? 'rgba(255, 255, 255, 0.6)' : "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            variant="h6"
            noWrap
            onClick={() => router.navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingTop: 1
            }}
          >
            <Link href="/">
              <Image src={logo} width={150} style={{ display: "flex", alignSelf: "center", }} />
            </Link>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Link href="/">          <Typography textAlign="center">Home</Typography></Link>
              </MenuItem>
              <MenuItem color="inherit" sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} >
                Our Methodologies <ExpandMoreIcon />
              </MenuItem>
              <Menu
              >
                <MenuItem >Methodology 1</MenuItem>
                <MenuItem >Methodology 2</MenuItem>
                <MenuItem >Methodology 3</MenuItem>
              </Menu>
              <MenuItem color="inherit" sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} >
                Programs<ExpandMoreIcon />
              </MenuItem>
              <Menu
              >
                <MenuItem >Program 1</MenuItem>
                <MenuItem >Program 2</MenuItem>
                <MenuItem >Program 3</MenuItem>
              </Menu>
              <MenuItem sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} color="inherit">Success Stories</MenuItem>
              <MenuItem sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} color="inherit">Blog</MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: 'auto',
              paddingTop: 1
            }}
          >
            <div style={{ marginLeft: 'auto' }}>
              <Image src={logo} width={150} sx={{ marginLeft: 'auto' }} />
            </div>
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <NavList sx={{ color: "black" }} className='list'>
              <Button color="inherit" sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }}>Home</Button>
              <Button color="inherit" sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} >
                Our Methodologies <ExpandMoreIcon />
              </Button>
              <Menu
              >
                <MenuItem >Methodology 1</MenuItem>
                <MenuItem >Methodology 2</MenuItem>
                <MenuItem >Methodology 3</MenuItem>
              </Menu>
              <Button color="inherit" sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} >
                Programs <ExpandMoreIcon />
              </Button>
              <Menu
              >
                <MenuItem >Program 1</MenuItem>
                <MenuItem >Program 2</MenuItem>
                <MenuItem >Program 3</MenuItem>
              </Menu>
              <Button sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} color="inherit">Success Stories</Button>
              <Button sx={{ fontWeight: "600", fontSize: { xs: "13px", lg: "15px" } }} color="inherit">Blog</Button>
            </NavList>

          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Link href={{ pathname: '/register', query: { price: 349 } }}>
                  <Button component="span" variant="contained" sx={{ background: "linear-gradient(0deg, #FCD281 0%, #FBCF7A 15%, #FAC669 35.99%, #F7B94D 59.99%, #F4A627 85.99%, #F39B0E 99.98%)", borderRadius: "52.8079px", fontWeight: "700", color: "#000", fontSize: "14px", textTransform: "none" }} className='list'
                  >
                    Register Now
                  </Button>
                </Link>
              </IconButton>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
