import React from 'react';
import styled from "styled-components";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
let settings = {
    dots : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll : 1,
    autoplay: true
}
  return (
<Carousel {...settings}>
    <Wrap>
    <img src="/Disney Clone Challenge/images/slider-badging.jpg" alt="" />
    </Wrap>
    <Wrap>
    <img src="/Disney Clone Challenge/images/slider-badag.jpg" alt=""/>
    </Wrap>
</Carousel>
  )
}

export default ImgSlider
const Carousel = styled(Slider)`
margin-top : 20px;
margin-bottom : 19px;
ul li button{
  &:before{
    font-size: 10px;
    color: white;
  }
}
li.slick-active button::before{
  color : white;
}
.slick-list{
    overflow: visible;
}
button {
  z-index: 1;
}


`
const Wrap = styled.div`
cursor: pointer;
img{
  border: 4px solid transparent;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &: hover{
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
`