import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo.png';
import AutoComplete from '../Input/AutoComplete';
import {IoLocationOutline} from 'react-icons/io5';
import {MdOutlineShoppingBag} from 'react-icons/md';
import {TbTruckDelivery} from 'react-icons/tb';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImage} />
        <AutoComplete />
        <RightContainer>
          <RightContainerItem>
            Gọi mua hàng <br/> 1800.2097
          </RightContainerItem>
          <RightContainerItem>
            <IoLocationOutline style={{fontSize: '25px'}} />
            Cửa hàng gần bạn
          </RightContainerItem>
          <RightContainerItem>
            <TbTruckDelivery style={{fontSize: '25px'}} />

           Tra cứu đơn hàng
          </RightContainerItem>
          <RightContainerItem>
            <MdOutlineShoppingBag style={{fontSize: '25px'}} />
           Giỏ hàng
          </RightContainerItem>
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Logo = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  background-color: #d70018;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  `

const RightContainerItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`
