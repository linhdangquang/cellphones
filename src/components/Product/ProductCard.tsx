import { Rate } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IProduct } from '../../types/product';
import { formatVND } from '../../utils/formatVND';

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5 - 50px);
  height: auto;
`;

const ProductImage = styled.div`
  height: 160px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductTitle = styled.div`
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  a {
    height: 100%;
    width: 100%;
    color: #444444;
  }
`;

const ProductPriceContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ProductPriceSale = styled.p`
  font-size: 16px;
  color: #d70018;
  line-height: 17.6px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #707070;
  line-height: 17.6px;
`;

export const ProductEventMessage = styled.div`
  background-color: #f3f4f6;
  border: 2px solid #e5e7eb;
  color: #444444;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 5px;
`;

const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  width: 100%;
  column-gap: 5px;
`;

const RateQuantity = styled.div`
  font-size: 12px;
  color: #444444;
`;

const ProductRate = styled(Rate)`
  .ant-rate-star,
  .ant-rate-star-zero {
    color: #000;
    .anticon,
    .anticon-star {
      color: #000;
    }
    margin-right: 0px;
  }
  .ant-rate-star-full {
    color: #d70018;
    .anticon,
    .anticon-star {
      color: #d70018;
    }
  }
`;

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <ProductCardContainer>
      <ProductImage>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </ProductImage>
      <ProductTitle>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </ProductTitle>
      <ProductPriceContent>
        {product.saleOffPrice && (
          <ProductPriceSale>
            {formatVND(product.saleOffPrice)}
          </ProductPriceSale>
        )}
        <ProductPrice>{formatVND(product.originalPrice)}</ProductPrice>
      </ProductPriceContent>
      <ProductEventMessage>
        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
        1.000.000đ
      </ProductEventMessage>
      <RateContainer>
        <ProductRate defaultValue={5} />
        <RateQuantity>15 đánh giá</RateQuantity>
      </RateContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
