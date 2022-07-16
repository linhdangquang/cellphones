import React from 'react';
import styled from 'styled-components';
import MainHomeMenu from './MainHomeMenu';
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <HomeTopContent>
        <MainHomeMenu />
        <HomeTopBanner>
          <img src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/s22%20new.png" alt=""/>
        </HomeTopBanner>
      </HomeTopContent>
    </>
  );
};



const HomeTopContent = styled.div`
  margin: 15px 0;
  display: flex;
  column-gap: 50px;
`;

const HomeTopBanner = styled.div`
  width: 100%;
  height: 450px;
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }
`

export default Home;
