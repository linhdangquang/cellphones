import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { PageTitle, TitleContainer } from '.';
import { getProduct, updateProduct } from '../../../api/products';

const { TextArea } = Input;
const { Option } = Select;

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams();
  const onFinish = async (values: any) => {
    console.log('Success:', values);

    try {
      await updateProduct({ ...values, id });
      message.success('Cập nhật thành công');
      navigate(-1);
    } catch (err) {
      message.error('Có lỗi xảy ra');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProduct(id);
      form.setFieldsValue(data);
    };
    fetchData();
  }, [id, form]);
  return (
    <>
      <TitleContainer>
        <PageTitle>Cập nhật điện thoại</PageTitle>
      </TitleContainer>
      <Row gutter={16} style={{ backgroundColor: '#fff', padding: '10px' }}>
        <Col span={10}>
          {/* <UploadImage  /> */}
        </Col>
        <Col span={14}>
          <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
          <Form
            name='product'
            form={form}
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
                  rules={[
                    { required: true, message: 'Giá gốc không được trống' },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                    size='large'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name='saleOffPrice'
                  label='Giá giảm'
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: 'Gía khuyến mãi ' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || value > getFieldValue('originalPrice')) {
                          return Promise.reject(
                            'Giá khuyến mãi phải bé hơn giá gốc'
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    formatter={(value) =>
                      `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                    parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                    size='large'
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label='Phân loại'
                  name='categories'
                  rules={[{ required: true, message: 'Phân loại' }]}
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
              <AddButton
                type='primary'
                shape='round'
                size='large'
                htmlType='submit'
              >
                Cập nhật sản phẩm
              </AddButton>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export const AddButton = styled(Button)`
  background-color: #00b0d7;
`;

export default Edit;
