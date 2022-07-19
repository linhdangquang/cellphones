import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, Input, message } from 'antd';
import { CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface Props {
  onUploadImage: (imageUrl: string) => void;
  productImage?: string;
  onRemoveImage?: () => void;
}

const UploadImage = ({ onUploadImage, productImage, onRemoveImage }: Props) => {
  const [previewImage, setPreviewImage] = useState<any>('');
  const [base64Image, setBase64Image] = useState<any>('');
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024 * 2) {
      message.error('Ảnh không được lớn hơn 2MB');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setBase64Image(reader.result);
    };
  };
  useEffect(() => {
    const onUpload = () => {
        onUploadImage(base64Image);
    };
    onUpload();
  }, [previewImage, onUploadImage]);
  useEffect(() => {
    if (productImage) {
      setPreviewImage(productImage);
    }
  }, [productImage]);
  return (
    <Container>
      <UploadWrapper>
        {previewImage ? (
          <PreviewImageContainer>
            <RemoveButton title='Bỏ hình ảnh' onClick={() => {
              setPreviewImage('');
              setBase64Image('');
              onRemoveImage && onRemoveImage();
            }}>
              <RemoveIcon />
            </RemoveButton>
            <img src={previewImage} alt='' width={50} />
          </PreviewImageContainer>
        ) : (
          <>
            <Button type='dashed' shape='circle'>
              <LabelInput htmlFor='upload-image'>
                <PlusCircleOutlined />{' '}
              </LabelInput>
            </Button>
            <input
              name='upload-image'
              id='upload-image'
              type='file'
              onChange={handleChangeImage}
              accept='image/png, image/jpg, image/jpeg '
              hidden
            />
            <Typography.Title level={5}>Thêm ảnh</Typography.Title>
          </>
        )}
      </UploadWrapper>
      <Label>Mô tả ngắn</Label>
      <TextArea rows={4} placeholder='Mô tả ngắn' />
    </Container>
  );
};

const Container = styled.div``;

const LabelInput = styled.label`
  display: block;
  cursor: pointer;
`;

const Label = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const PreviewImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  img {
    width: 100%;
  }
  &::before {
    content: 'Xem trước hình ảnh';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    color: gray;
  }
`;

const RemoveButton = styled.div`
  position: absolute;
  top: 2.5px;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
`;
const RemoveIcon = styled(CloseCircleOutlined)`
  font-size: 24px;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ef4848;
  }
`;
export default UploadImage;
