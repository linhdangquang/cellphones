import React from 'react';
import { useGetProductsQuery } from '../../services/products-api';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import { LoadingContainer } from '../Loading/LoadingContainer';
import HomeLoading from '../Loading/HomeLoading';
type Props = {};

export const ProductsContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: baseline;
  gap: 30px 50px;
  padding: 20px 50px;
`;
export const ContainerTitle = styled.div`
  font-size: 22px;
  color: #444444;
  width: 1200px;
  padding-top: 50px;
  margin: 0 auto;
`;

const ProductsContainer = (props: Props) => {
  const { data, isLoading } = useGetProductsQuery();
  return (
    <>
      <ContainerTitle>ĐIỆN THOẠI NỔI BẬT NHẤT</ContainerTitle>
      {isLoading ? (
        <LoadingContainer>
          <HomeLoading />
        </LoadingContainer>
      ) : (
        <ProductsContainerStyled>
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainerStyled>
      )}
    </>
  );
};

export default ProductsContainer;
