import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo.png';
import AutoComplete from '../Input/AutoComplete';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ShoppingCartOutlined, ShoppingOutlined } from '@ant-design/icons';

const Header = () => {
  const { totalItems } = useAppSelector((state) => state.cart);
  return (
    <Wrapper>
      <Container>
        <Link to={'/'}>
          <Logo src={LogoImage} />
        </Link>
        <AutoComplete />
        <RightContainer>
          <RightContainerItem>
            Gọi mua hàng <br /> 1800.2097
          </RightContainerItem>
          <RightContainerItem>
            <IoLocationOutline style={{ fontSize: '25px' }} />
            Cửa hàng gần bạn
          </RightContainerItem>
          <RightContainerItem>
            <TbTruckDelivery style={{ fontSize: '25px' }} />
            Tra cứu đơn hàng
          </RightContainerItem>
          <RightContainerItem>
            <Link to={'/cart'}>
              <CartIcon>
                <CartItemNumber>{totalItems}</CartItemNumber>

                <ShoppingOutlined style={{ fontSize: '25px' }} />
              </CartIcon>
            </Link>
            <Link  to={'/cart'}>Giỏ hàng</Link>
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
`;

const RightContainerItem = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: relative;

  a {
    color: #fff !important;
  }
`;

const CartIcon = styled.div`
  font-size: 12px;
  color: #fff;
  position: relative;
`;

const CartItemNumber = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1px;
`;
