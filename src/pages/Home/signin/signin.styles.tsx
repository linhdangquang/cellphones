import {
  Col,
  Row,
  Button,
  Form,
  InputNumber,
  Select,
} from 'antd';
import styled from 'styled-components';
import { FormInput } from '../../../components/Product/ProductForm';
import { PayButton } from '../cart/cart.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  height: 100vh;
`;

export const SignInContent = styled.div`
  width: 800px;
  height: 508px;
  background-color: #fff;
  display: grid;
  border-radius: 20px;
  grid-template-columns: 60% 40%;
  padding: 20px;
`;

export const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px 35px;
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
`;

export const Input = styled(FormInput)`
  width: 100%;
  border: 1px solid #c7c7c7;
  padding: 5px;
  border-radius: 0;
`;

export const SignInButton = styled(PayButton)`
  width: 100%;
  height: 50px;
  background-color: #ff424e;
  text-transform: none;
`;

export const SignInWithOtherContainer = styled.div`
  padding: 20px 35px;
  margin: 0 auto;
`;

export const SignInWithOther = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
