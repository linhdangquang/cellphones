import React from 'react';
import styled from 'styled-components';
import MainHomeMenu from './MainHomeMenu';
type Props = {};

const Home = (props: Props) => {
  return (
    <HomeContainer>
      <HomeTopContent>
        <MainHomeMenu />
        <div></div>
      </HomeTopContent>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const HomeTopContent = styled.div`
  margin: 15px 0;
`;

export default Home;
