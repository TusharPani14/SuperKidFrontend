import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography } from '@mui/material';
import caro1 from '../pictures/1.1.png'
import caro2 from '../pictures/1.2.png'
import caro3 from '../pictures/1.3.png'
import caro4 from '../pictures/1.4.png'
import Image from 'next/image';
const data = [
  { id: 1, image: caro1, title: 'We just completed the prodigy program & we just loved it. My baby’s vocabulary has gone up quite a bit.' , name:"Preti reddy"},
  { id: 2, image: caro2, title: 'Just completed the prodigy challenge & my baby loved it! My baby is so excited when I bring the booster cards.',name:"Christina H."  },
  { id: 3, image: caro3, title: 'My child started walking within 9 months. I give the program two thumbs up.Thank you Superkid', name:"Taneisha T." },
  { id: 4, image: caro4, title: 'I was very very happy. All credit goes to Super Kid. They have helped a lot. Without them it is not possible.', name:"Anchal J."},
];

const MultiCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={false}
      showDots={false}
      infinite={true}
      autoPlay={true}
      containerClass="carousel-container"
      itemClass="carousel-item"
    >
      {data.map((item) => (
        <Box key={item.id} sx={{ textAlign: 'center' , background:"#F9A23D" , border:"2.11232px solid #455A64" , borderRadius:"29.5724px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , height:"420px" , width:"auto" ,padding:"0 0.5em" , gap:"5px"}}>
          <Image src={item.image} alt={item.title} style={{ maxWidth: '100%',borderRadius:"29.5724px" }} />
          <Typography sx={{fontSize:"13px" , textAlign:"start", color:"white" }}>
            {item.title}
          </Typography>
          <Typography sx={{fontSize:"13px" , color:"#F1654A", alignSelf:"flex-end" , fontWeight:"700"}}>
            {item.name}
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default MultiCarousel;
