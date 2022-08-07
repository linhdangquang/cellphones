import React, { useEffect } from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo.png';
import AutoComplete from '../Input/AutoComplete';
import { IoLocationOutline } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { ShoppingOutlined } from '@ant-design/icons';
import { logOut } from '../../api/auth';

const Header = () => {
  const { totalItems } = useAppSelector((state) => state.cart);
  const [user, setUser] = React.useState<any>(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);
    setUser(user);
  }, []);
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
            <Link to={'/cart'}>Giỏ hàng</Link>
          </RightContainerItem>
          {user === null ? (
            <>
              <RightContainerItem>
                <Link to={'/signin'}>Đăng nhập</Link>
              </RightContainerItem>
              <RightContainerItem>
                <Link to={'/signup'}>Đăng ký</Link>
              </RightContainerItem>
            </>
          ) : (
            <>
              <RightContainerItem>
                <div>
                  {user?.user?.email.slice(0, user?.user?.email.indexOf('@'))}
                </div>
              </RightContainerItem>
              <RightContainerItem>
                <div
                  onClick={() => {
                    logOut();
                    setUser(null);
                  }}
                >
                  Đăng xuất
                </div>
              </RightContainerItem>
            </>
          )}
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

  a,
  div {
    color: #fff !important;
    cursor: pointer;
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
