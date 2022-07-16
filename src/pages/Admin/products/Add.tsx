import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from 'antd';
import UploadImage from '../../../components/Product/UploadImage';
import { createProduct } from '../../../api/products';
import { useNavigate } from 'react-router-dom';
import { PageTitle, TitleContainer } from '.';

const { TextArea } = Input;
const { Option } = Select;

const Add: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log('Success:', values);

    try {
      await createProduct(values);
      message.success('Tạo mới thành công');
      navigate(-1);
    } catch (err) {
      message.error('Có lỗi xảy ra');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <TitleContainer>
        <PageTitle>Thêm mới điện thoại</PageTitle>
      </TitleContainer>
      <Row gutter={16}  style={{backgroundColor: '#fff', padding: '10px'}}>
        <Col span={10}>
          <UploadImage />
        </Col>
        <Col span={14}>
          <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
          <Form
            // name="product"
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='on'
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name='name'
              labelCol={{ span: 24 }}
              label='Tên sản phẩm'
              rules={[
                { required: true, message: 'Tên sản phẩm không được trống' },
              ]}
            >
              <Input size='large' />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name='originalPrice'
                  label='Giá gốc'
                  labelCol={{ span: 24 }}
                  rules={[ { required: true, message: 'Giá gốc không được trống' } ]}
                  
                >
                  <InputNumber style={{ width: '100%' }} size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='saleOffPrice'
                  label='Giá giảm'
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: 'Gía khuyến mãi ' },({getFieldValue}) => ({
                    validator(_, value) {
                      if (!value || value > getFieldValue('originalPrice')) {
                        return Promise.reject('Giá khuyến mãi phải bé hơn giá gốc');
                      }
                      return Promise.resolve();
                    }
                  })]}
                >
                  <InputNumber style={{ width: '100%' }} size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Phân loại'
                  name='categories'
                  rules={[{ required: true }]}
                >
                  <Select style={{ width: '100%' }} size='large'>
                    <Option value='phone'>Điện thoại</Option>
                    <Option value='laptop'>Laptop</Option>
                    <Option value='accessories' disabled>
                      Phụ kiện
                    </Option>
                    <Option value='tablet'>Máy tính bảng</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name='feature'
              labelCol={{ span: 24 }}
              label='Đặc điểm nổi bật'
              rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
            >
              <TextArea name='feature' />
            </Form.Item>
            <Form.Item
              name='description'
              labelCol={{ span: 24 }}
              label='Mô tả sản phẩm'
              rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
            >
              <TextArea name='description' />
            </Form.Item>

            <Form.Item>
              <AddButton type='primary' shape='round' size='large' htmlType='submit'>
                Tạo mới sản phẩm
              </AddButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export const AddButton = styled(Button)`
  background-color: #00B0D7;
`


export default Add;
