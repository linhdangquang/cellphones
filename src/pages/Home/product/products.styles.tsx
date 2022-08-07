import { Button } from 'antd';
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
`;
export const ProductTitle = styled.div`
  font-size: 18px;
  height: 50px;
  border-bottom: 1px solid #d1d5db;
  padding: 10px 130px;
  color: #0a263c;
`;
export const ProductInfoContent = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
`;

export const ImageContainer = styled.div`
  width: 358px;
  height: 358px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  width: calc(100% - 358px - 10px);
  padding-top: 15px;
  margin-left: 15px;
`;

export const ProductShortInfo = styled.div`
  font-size: 15px;
  color: #444;
`;

export const HandleContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
`;

export const PayNowButton = styled(Button)`
  background-color: #ff3945 !important;
  border-color: #000 !important;
  color: #fff !important;
  border-radius: 5px;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 10px;
  height: 48px;
  width: 233px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f72230 !important;
  }
`;

export const AddToCartButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  p {
    font-size: 14px;
    width: 68px;
  }
`;

export const AddToCartButton = styled(Button)`
  background-color: #fff !important;
  height: 48px;
  width: 48px;
  border: #ff3945 2px solid !important;
  border-radius: 5px;
`;

export const ProductRelated = styled.div`
  width: 1200px;
  margin: 35px auto;
  h3 {
    font-size: 18px;
  }
`;

export const ProductRelatedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
`
