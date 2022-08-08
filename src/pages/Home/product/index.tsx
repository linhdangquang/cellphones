import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetProductQuery,
  useGetProductsByCategoryQuery,
} from '../../../services/products-api';
import { useAppDispatch } from '../../../app/hooks';
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
  ProductRelated,
  ProductRelatedContainer,
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
import ProductCard from '../../../components/Product/ProductCard';
import BreadCrumbPage from '../../../components/BreadCrum';
import { useGetCategoryByNameQuery } from '../../../services/categories-api';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery(id);
  const category = useGetCategoryByNameQuery(data?.categories);
  const [breadCrumb, setBreadCrumb] = useState<any>([]);
  const products = useGetProductsByCategoryQuery(data?.categories);
  const productsRelated = products?.data
    ?.filter((product) => product.id !== parseInt(id!))
    .slice(0, 5);
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(data as IProduct));
  };

  const buyNowHandler = () => {
    dispatch(addToCart(data as IProduct));
    navigate('/cart');
  };
  useEffect(() => {
    const breadCrumb = [
      {
        name: 'Trang chủ',
        link: '/',
      },
      {
        name: category?.data?.find(
          (category: any) => category.name === data?.categories
        )?.displayName,
        link: `/categories/${data?.categories}`,
      },
      {
        name: data?.name,
        link: '',
      },
    ];
    setBreadCrumb(breadCrumb);
  }, [data, category]);
  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <HomeLoading />
        </LoadingContainer>
      ) : (
        <PageContainer>
          <BreadCrumbPage breadcrumbItems={breadCrumb} />
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
              <ProductShortInfo>Mô tả ngắn: {data?.feature}</ProductShortInfo>
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
          <ProductRelated>
            <h3>Sản phẩm cùng loại</h3>
            <ProductRelatedContainer>
              {productsRelated?.map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </ProductRelatedContainer>
          </ProductRelated>
        </PageContainer>
      )}
    </>
  );
};

export default Product;
