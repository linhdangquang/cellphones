import React from 'react';
import { useParams } from 'react-router-dom';
import HomeLoading from '../../../components/Loading/HomeLoading';
import { LoadingContainer } from '../../../components/Loading/LoadingContainer';
import ProductCard from '../../../components/Product/ProductCard';
import {
  ContainerTitle,
  ProductsContainerStyled,
} from '../../../components/Product/ProductsContainer';
import { useGetCategoriesQuery } from '../../../services/categories-api';
import { useGetProductsByCategoryQuery } from '../../../services/products-api';

type Props = {};

const CategoryProduct = (props: Props) => {
  const { categoryName } = useParams();
  const { data, isLoading, isError } =
    useGetProductsByCategoryQuery(categoryName);
  const categories = useGetCategoriesQuery();
  console.log(data);
  return (
    <>
      <ContainerTitle>
        {
          categories?.data?.find((category) => category.name === categoryName)
            ?.displayName
        }
      </ContainerTitle>
      {isError && <h1>Error</h1>}
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

export default CategoryProduct;
