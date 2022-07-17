import React from 'react';
import MainFooter from './MainFooter';
import styled from 'styled-components';
import BottomFooter from './BottomFooter';

const FooterContainer = styled.div`
  margin: 0 auto;
  margin-top  : 150px ;
  background-color: #fff;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter />
      <BottomFooter />
    </FooterContainer>
  );
};

export default Footer;
