import React from 'react';
import { Container } from '../../components/Header';
import styled from 'styled-components';
import MainHomeMenu from './MainHomeMenu';
type Props = {};

const Home = (props: Props) => {
  return (
    <Container>
      <HomeTopContent>
        <MainHomeMenu />
      </HomeTopContent>
    </Container>
  );
};

const HomeTopContent = styled.div`
  margin: 15px 0;
`;

export default Home;
