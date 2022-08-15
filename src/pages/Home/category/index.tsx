import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import BreadCrumbPage from '../../../components/BreadCrum';
import HomeLoading from '../../../components/Loading/HomeLoading';
import { LoadingContainer } from '../../../components/Loading/LoadingContainer';
import ProductCard from '../../../components/Product/ProductCard';
import {
  ContainerTitle,
  ProductsContainerStyled,
} from '../../../components/Product/ProductsContainer';
import { useGetCategoriesQuery } from '../../../services/categories-api';
import { useGetProductsByCategoryQuery } from '../../../services/products-api';

const CategoryProduct = () => {
  const { categoryName } = useParams();
  const [breadCrumb, setBreadCrumb] = useState<any>([]);
  const { data, isLoading, isError } =
    useGetProductsByCategoryQuery(categoryName);
  const categories = useGetCategoriesQuery();
  useEffect(() => {
    const breadCrumb = [
      {
        name: 'Trang chủ',
        link: '/',
      },
      {
        name: categories?.data?.find(
          (category) => category.name === categoryName
        )?.displayName,
        link: `/categories/${
          categories?.data?.find((category) => category.name === categoryName)
            ?.name
        }`,
      },
    ];
    setBreadCrumb(breadCrumb);
  }, [data, categoryName, categories]);
  return (
    <>
      <Helmet>
        <title>{`${
          categories?.data?.find((category) => category.name === categoryName)
            ?.displayName
        } - Cellphones`}</title>
      </Helmet>
      <BreadCrumbPage breadcrumbItems={breadCrumb} />
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
