import { Rate } from 'antd';
import React from 'react';
import styled from 'styled-components';
import product from '../../assets/images/mockproductimage.png';

type Props = {};

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5 - 20px);
`;

const ProductImage = styled.img`
  width: 160px;
  height: 160px;
`;

const ProductTitle = styled.a`
  font-size: 14px;
  line-height: 21px;
  color: #444444;
  margin-top: 10px;
  margin-bottom: 15px;
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

const ProductEventMessage = styled.div`
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
`

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

const ProductCard = (props: Props) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product} />
      <ProductTitle href='/as'>iPhone 11 64GB I Chính hãng VN/A</ProductTitle>
      <ProductPriceContent>
        <ProductPriceSale>1.199.000 đ</ProductPriceSale>
        <ProductPrice>10.299.000 đ</ProductPrice>
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
