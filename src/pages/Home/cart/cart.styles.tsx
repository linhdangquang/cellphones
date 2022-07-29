import { CaretLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 20px auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  color: #d70018;
  width: 100%;
  p {
    text-align: center;
    margin: 0;
    width: 80%;
    font-weight: 600;
  }
`;

export const ReturnLink = styled(Link)`
  font-size: 16px;
  color: #d70018 !important;
`;

export const ReturnIcon = styled(CaretLeftOutlined)`
  font-size: 12px;
  color: #000;
  vertical-align: baseline;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 25px;
`;

export const CartFooter = styled.div`
  width: calc(100% + 15px);
  padding: 20px 10px;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 600;
  }
`;

export const PayButton = styled(Button)`
  background-color: #D70018 !important;
  border-color: #DC3545 !important;
  color: #fff !important;
  border-radius: 5px;
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 10px;
  height: 60px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`

export const AnotherButton = styled(Button)`
  background-color: #fff !important;
  border-width: 1px;
  border-color: #DC3545 !important;
  color: #DC3545 !important;
  border-radius: 5px;
  text-transform: uppercase;
  width: 100%;
  height: 60px;
`
