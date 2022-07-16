import React from "react";
import styled from "styled-components";
import {Typography, Button, Input} from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons';

const {TextArea} = Input

const UploadImage = () => {
    return (
        <Container>
            <UploadWrapper>
                <Button type="dashed" shape="circle" icon={<PlusCircleOutlined />} />
                <Typography.Title level={5}>Thêm ảnh</Typography.Title>
            </UploadWrapper>
            <Label>Mô tả ngắn</Label>
            <TextArea rows={4} placeholder="Mô tả ngắn"/>
        </Container>
    )
}

const Container = styled.div`
    
`

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: left;
`

const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px dashed gray;
`

export default UploadImage;