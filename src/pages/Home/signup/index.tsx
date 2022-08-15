import React from 'react';
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
} from '../signin/signin.styles';
import googleicon from '../../../assets/images/googleicon.png';
import facebookicon from '../../../assets/images/facebookicon.png';
import logo from '../../../assets/images/logo.png';
import { Form, message } from 'antd';
import { signUp } from '../../../api/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
type Props = {};

const SignUp = (props: Props) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      await signUp(values);
      toast.success('Đăng ký thành công, vui lòng đăng nhập');
      navigate('/signin');
      form.resetFields();
    } catch (error: any) {
      message.error('Đăng ký thất bại,' + error.response.data);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Container>
      <Helmet>
        <title>Đăng ký - Cellphones</title>
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
            <InputLabel>Số điện thoại</InputLabel>
            <Form.Item
              name='phone'
              rules={[
                { required: true, message: 'Số điện thoại không được trống' },
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
                Đăng ký
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

export default SignUp;
