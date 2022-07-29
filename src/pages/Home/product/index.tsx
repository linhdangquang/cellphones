import { Button } from 'antd';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../../services/products-api';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { addToCart } from '../../../features/cart/cartSlice';
import { LoadingContainer } from '../../../components/Loading/LoadingContainer';
import HomeLoading from '../../../components/Loading/HomeLoading';
import {
  AddToCartButton,
  AddToCartButtonContainer,
  ButtonsContainer,
  HandleContainer,
  ImageContainer,
  PageContainer,
  PayNowButton,
  ProductInfo,
  ProductInfoContent,
  ProductShortInfo,
  ProductTitle,
} from './products.styles';
import {
  ItemPrice,
  ItemPriceRegular,
  ItemPriceSale,
} from '../cart/CartItem/cart-item.styles';
import { IProduct } from '../../../types/product';
import { formatVND } from '../../../utils/formatVND';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery(id);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cart);

  const addToCartHandler = () => {
    dispatch(addToCart(data as IProduct));
  };

  const buyNowHandler = () => {
    dispatch(addToCart(data as IProduct));
    navigate('/cart');
  };
  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <HomeLoading />
        </LoadingContainer>
      ) : (
        <PageContainer>
          <ProductTitle>{data?.name}</ProductTitle>
          <ProductInfoContent>
            <ImageContainer>
              <img src={data?.image} alt={data?.name} />
            </ImageContainer>
            <ProductInfo>
              <ItemPrice>
                <ItemPriceSale style={{ fontSize: '24px' }}>
                  {formatVND(data?.saleOffPrice)}
                </ItemPriceSale>
                <ItemPriceRegular style={{ fontSize: '14px' }}>
                  {formatVND(data?.originalPrice)}
                </ItemPriceRegular>
              </ItemPrice>
              <ProductShortInfo>
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
                đến cảm giác sang trọng và tinh tế.
              </ProductShortInfo>
            </ProductInfo>
          </ProductInfoContent>
          <HandleContainer>
            <ButtonsContainer>
              <PayNowButton onClick={buyNowHandler}>mua ngay</PayNowButton>
              <AddToCartButtonContainer>
                <AddToCartButton
                  onClick={addToCartHandler}
                  icon={
                    <ShoppingCartOutlined
                      style={{ color: '#ff3945', fontSize: '25px' }}
                    />
                  }
                />
                <p>Thêm vào giỏ hàng</p>
              </AddToCartButtonContainer>
            </ButtonsContainer>
          </HandleContainer>
        </PageContainer>
      )}
    </>
  );
};

export default Product;
