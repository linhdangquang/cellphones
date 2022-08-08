import { Empty } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { formatVND } from '../../../utils/formatVND';
import {
  AnotherButton,
  CartBody,
  CartContainer,
  CartFooter,
  CartHeader,
  Container,
  PayButton,
  ReturnIcon,
  ReturnLink,
  TotalPrice,
} from './cart.styles';
import CartItemContainer from './CartItem/CartItem';

type Props = {};

const CartPage = (props: Props) => {
  const { products, total } = useAppSelector((state) => state.cart);
  return (
    <Container>
      {products.length > 0 ? (
        <>
          <CartHeader>
            <ReturnLink to={'/'}>
              <ReturnIcon /> Trở về
            </ReturnLink>
            <p>Giỏ hàng</p>
          </CartHeader>
          <CartContainer>
            <CartBody>
              {products.map((product) => (
                <CartItemContainer key={product.id} product={product} />
              ))}
            </CartBody>

          </CartContainer>
          <CartFooter>
            <TotalPrice>
              <p style={{color: '#0E2431'}}>Tổng tiền tạm tính:</p>
              <p style={{color: '#D70018'}}>{formatVND(total)}</p>
            </TotalPrice>
            <PayButton >
              <Link to={'/'} >tiến hành đặt hàng</Link>
            </PayButton>
            <AnotherButton>
              <Link to={'/products'}>chọn thêm sản phẩm khác</Link>
            </AnotherButton>
          </CartFooter>
        </>
      ) : (
        <div>
          <h1>Giỏ hàng trống</h1>
          <Empty description={false} />
        </div>
      )}
    </Container>
  );
};

export default CartPage;
