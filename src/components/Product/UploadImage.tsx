import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, Input} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface Props {
  onUploadImage: (imageUrl: string) => void;
}

const UploadImage = ({ onUploadImage }: Props) => {
  const [previewImage, setPreviewImage] = useState<any>('');
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
  };

 
  useEffect(() => {
    const onUpload = () => {
        onUploadImage(previewImage);
    };
    onUpload();
  }, [previewImage]);
  return (
    <Container>
      <UploadWrapper>
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
        {previewImage && <img src={previewImage} alt='' width={50} />}
        <Typography.Title level={5}>Thêm ảnh</Typography.Title>
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

export default UploadImage;
