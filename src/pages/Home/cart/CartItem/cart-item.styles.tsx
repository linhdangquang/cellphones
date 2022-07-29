import { CloseOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  row-gap: 20px;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

export const RemoveButton = styled.div`
  cursor: pointer;
`;

export const RemoveIcon = styled(CloseOutlined)`
  font-size: 15px;
  color: #000;
`;

export const ItemImage = styled.div`
  width: 25%;
  height: 100%;
  img {
    width: 160px;
    height: 100%;
    object-fit: cover;
  }
`;

export const ItemInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const ItemTitle = styled.p`
  font-size: 15px;
  color: #0e2431;
  margin-bottom: 0;
`;
export const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 2px;
`;

export const ItemPriceRegular = styled.p`
  font-size: 13px;
  color: #777777;
  margin-bottom: 0;
`;
export const ItemPriceSale = styled.p`
  font-size: 15px;
  color: #d70018;
  margin-bottom: 0;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  padding: 2.5px 0;
`;

export const HandleButton = styled.div`
  cursor: pointer;
  color: #000;
`;

export const QuantityNumber = styled.div``;
