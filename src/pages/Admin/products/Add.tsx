import React, { useState } from 'react';
import {
  Typography,
  Col,
  Row,
  message,
} from 'antd';
import UploadImage from '../../../components/Product/UploadImage';
import { useNavigate } from 'react-router-dom';
import { PageTitle, TitleContainer } from '.';
import { uploadImage } from '../../../utils/uploadImageHandle';
import ProductForm from '../../../components/Product/ProductForm';
import { useAddProductMutation } from '../../../services/products-api';


const Add: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [createProduct] = useAddProductMutation();
  const [base64Image, setBase64Image] = useState<string>('');
  const onUploadImage = (base64: string) => {
    setBase64Image(base64);
  };
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      if (base64Image) {
        const res = await uploadImage(base64Image);
        if (res.code === 'ERR_BAD_REQUEST') {
          message.error(res.response.statusText);
          return;
        }
        values.image = res;
      }
      await createProduct(values);
      message.success('Tạo mới thành công');
      navigate(-1);
    } catch (err) {
      message.error('Có lỗi xảy ra');
    } finally {
      setLoading(false);
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
      <Row gutter={16} style={{ backgroundColor: '#fff', padding: '10px' }}>
        <Col span={10}>
          <UploadImage onUploadImage={onUploadImage} />
        </Col>
        <Col span={14}>
          <Typography.Title
            style={{
              color: '#3D5170',
              borderBottom: '1px solid #dddddd',
              paddingBottom: '10px',
            }}
            level={5}
          >
            Thông tin sản phẩm
          </Typography.Title>
          <ProductForm onFinish={onFinish} onFinishFailed={onFinishFailed} loading={loading} />
        </Col>
      </Row>
    </>
  );
};



export default Add;
