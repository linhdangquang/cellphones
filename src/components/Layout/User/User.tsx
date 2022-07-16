import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header';
import styled from 'styled-components';

const UserLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export default UserLayout;
