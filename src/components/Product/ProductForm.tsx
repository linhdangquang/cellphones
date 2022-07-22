import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { currencyFormatter, currencyParser } from '../../utils/formatVND';

type Props = {
  onFinish: (values: any) => void;
  onFinishFailed?: (errorInfo: any) => void;
  loading: boolean;
  formData?: any;
};

const { TextArea } = Input;
const { Option } = Select;
const ProductForm = ({
  onFinish,
  onFinishFailed,
  loading,
  formData,
}: Props) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (formData) {
      form.setFieldsValue(formData);
    }
  }, [formData, form]);
  return (
    <Form
      form={form}
      name="product"
      initialValues={{
        originalPrice: '',
        saleOffPrice: '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='on'
      labelCol={{ span: 24 }}
    >
      <Form.Item
        name='name'
        labelCol={{ span: 24 }}
        label='Tên sản phẩm'
        rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
      >
        <FormInput size='large' />
      </Form.Item>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name='originalPrice'
            label='Giá gốc'
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Giá gốc không được trống' }]}
          >
            <FormInputNumber
              min={1}
              formatter={currencyFormatter}
              parser={currencyParser}
              style={{ width: '100%' }}
              size='large'
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name='saleOffPrice'
            label='Giá khuyến mãi'
            labelCol={{ span: 24 }}
            rules={[
              { required: true, message: 'Gía khuyến mãi ' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value > getFieldValue('originalPrice')) {
                    return Promise.reject('Giá khuyến mãi phải bé hơn giá gốc');
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <FormInputNumber
              formatter={currencyFormatter}
              parser={currencyParser}
              style={{ width: '100%' }}
              size='large'
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label='Phân loại'
            name='categories'
            rules={[{ required: true, message: 'Phân loại không được trống' }]}
          >
            <FormSelect size='large'>
              <Option value='phone'>Điện thoại</Option>
              <Option value='laptop'>Laptop</Option>
              <Option value='accessories' disabled>
                Phụ kiện
              </Option>
              <Option value='tablet'>Máy tính bảng</Option>
            </FormSelect>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name='feature'
        labelCol={{ span: 24 }}
        label='Đặc điểm nổi bật'
        rules={[{ required: true, message: 'Đặc điểm sản phẩm' }]}
      >
        <FormTextArea name='feature' />
      </Form.Item>
      <Form.Item
        name='description'
        labelCol={{ span: 24 }}
        label='Mô tả sản phẩm'
        rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
      >
        <FormTextArea name='description' />
      </Form.Item>

      <Form.Item>
        <FormButton
          type='primary'
          shape='round'
          size='large'
          htmlType='submit'
          loading={loading}
        >
          {formData ? 'Cập nhật sản phẩm' : 'Thêm mới sản phẩm'}
        </FormButton>
      </Form.Item>
    </Form>
  );
};

export const FormButton = styled(Button)`
  background-color: #00b0d7;
`;

export const FormInput = styled(Input)`
  border-radius: 5px;
`;
export const FormInputNumber = styled(InputNumber)`
  border-radius: 5px;
`;

export const FormTextArea = styled(TextArea)`
  border-radius: 5px;
`;

export const FormSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 5px;
  }
`;
export default ProductForm;
