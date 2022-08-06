import React from 'react'
import { Container, Input, InputContainer, InputLabel, LogoContainer, SignInButton, SignInContent, SignInForm, SignInWithOther, SignInWithOtherContainer } from '../signin/signin.styles'
import googleicon from '../../../assets/images/googleicon.png';
import facebookicon from '../../../assets/images/facebookicon.png';
import logo from '../../../assets/images/logo.png';
import { Form } from 'antd';
type Props = {}

const SignUp = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Container>
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
              rules={[{ required: true, message: 'Số điện thoại không được trống' }]}
            >
              <Input type='password' />
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
  )
}

export default SignUp