import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components';
import MainHomeMenu from './MainHomeMenu';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/banner2.png';
import Banner3 from '../../assets/images/banner3.png';
import Banner4 from '../../assets/images/banner4.png';
import Banner5 from '../../assets/images/banner5.png';
import Banner6 from '../../assets/images/banner6.png';
import ProductsContainer from '../../components/Product/ProductsContainer';
import { Helmet } from 'react-helmet-async';
type Props = {};

const Home = (props: Props) => {
  const slides = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
  return (
    <>
    <Helmet>
      <title>Trang chủ - Cellphones</title>
    </Helmet>
      <HomeTopContent>
        <MainHomeMenu />
        <SliderContainer autoplay effect='fade' dots dotPosition='bottom'>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <img src={slide} alt='slide' />
            </Slide>
          ))}
        </SliderContainer>
      </HomeTopContent>
      <ProductsContainer />
    </>
  );
};

const HomeTopContent = styled.div`
  margin: 15px auto;
  display: flex;
  column-gap: 50px;
  width: 1200px;
`;

const SliderContainer = styled(Carousel)`
  width: calc(1200px - 300px);
  max-width: 1200px;
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 100%;
  height: 450px;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Home;
