import React, { useEffect, useState } from 'react';
import { Typography, Col, Row, message } from 'antd';
import UploadImage from '../../../components/Product/UploadImage';
import { useNavigate, useParams } from 'react-router-dom';
import { PageTitle, TitleContainer } from '.';
import { uploadImage } from '../../../utils/uploadImageHandle';
import ProductForm from '../../../components/Product/ProductForm';
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from '../../../services/products-api';

const Edit: React.FC = () => {
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [isRemoveImage, setIsRemoveImage] = useState<boolean>(false);
  const [base64Image, setBase64Image] = useState<string>('');
  const onRemoveImage = () => {
    setIsRemoveImage(true);
  };

  const onUploadImage = (base64: string) => {
    setBase64Image(base64);
  };
  const { id } = useParams();
  const { data} = useGetProductQuery(id);
  const product = data;
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
        await updateProduct({ ...values, id });
      } else if (isRemoveImage) {
        await updateProduct({ ...values, id, image: '' });
      } else {
        values.image = product?.image;
        await updateProduct({ ...values, id });
      }
      message.success('Cập nhật thành công');
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
        <PageTitle>Cập nhật điện thoại</PageTitle>
      </TitleContainer>
      <Row gutter={16} style={{ backgroundColor: '#fff', padding: '10px' }}>
        <Col span={10}>
          <UploadImage
            onUploadImage={onUploadImage}
            productImage={product?.image}
            onRemoveImage={onRemoveImage}
          />
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
          <ProductForm
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            loading={loading}
            formData={product}
          />
        </Col>
      </Row>
    </>
  );
};

export default Edit;
