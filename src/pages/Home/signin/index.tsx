import React from 'react';
import googleicon from '../../../assets/images/googleicon.png';
import facebookicon from '../../../assets/images/facebookicon.png';
import logo from '../../../assets/images/logo.png';
import {
  Container,
  Input,
  InputContainer,
  InputLabel,
  LogoContainer,
  SignInButton,
  SignInContent,
  SignInForm,
  SignInWithOther,
  SignInWithOtherContainer,
} from './signin.styles';
import { Form, message } from 'antd';
import { signIn } from '../../../api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

type Props = {};

const SignIn = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const { data } = await signIn(values);
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('Đăng nhập thành công');
      if (data.user.admin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error: any) {
      message.error('Đăng nhập thất bại,' + error.response.data);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Container>
      <Helmet>
        <title>Đăng nhập - Cellphones</title>
      </Helmet>
      <SignInContent>
        <SignInForm
          name='signin'
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <InputContainer>
            <InputLabel>Email</InputLabel>
            <Form.Item
              name='email'
              rules={[
                { required: true, message: 'Email không được trống' },
                {
                  type: 'email',
                  message: 'Email không hợp lệ!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </InputContainer>
          <InputContainer>
            <InputLabel>Mật khẩu</InputLabel>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Password không được trống' }]}
            >
              <Input type='password' />
            </Form.Item>
          </InputContainer>

          <InputContainer>
            <Form.Item>
              <SignInButton htmlType='submit' type='primary'>
                Đăng nhập
              </SignInButton>
            </Form.Item>
          </InputContainer>

          <SignInWithOtherContainer>
            <p>Hoặc đăng nhập bằng</p>
            <SignInWithOther>
              <img src={facebookicon} alt='facebook' width='58px' />
              <img src={googleicon} alt='google' width='58px' />
            </SignInWithOther>
          </SignInWithOtherContainer>
        </SignInForm>
        <LogoContainer>
          <img src={logo} alt='google' />
        </LogoContainer>
      </SignInContent>
    </Container>
  );
};

export default SignIn;
