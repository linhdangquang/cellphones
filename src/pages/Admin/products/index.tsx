import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { ColumnsType } from 'antd/es/table';
import { formatVND } from '../../../utils/formatVND';
import { getAllPros } from '../../../api/products';
import { ReactComponent as ToogleIcon } from '../../../assets/images/Toggle-on.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';
import './products.css';
import { Link } from 'react-router-dom';
import { PlusSquareOutlined } from '@ant-design/icons';


const ProductAdminPage = () => {
  const [products, setProducts] = useState<any[]>([]);

  const dataSource = products?.map((item, idx) => {
    return { ...item, key: idx + 1 };
  });
  const columns: ColumnsType<any> = [
    {
      title: '#',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: 'Tên sản phẩm',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Thành tiền',
      key: 'originalPrice',
      dataIndex: 'originalPrice',
      render: (text: any, record: any): any => <p>{formatVND(text)}</p>,
    },
    {
      title: 'Mô tả',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Ẩn/hiện',
      key: 'id',
      dataIndex: 'id',
      render: (text: any, record: any): any => (
        <div className='cursor-pointer'>
          <ToogleIcon width='50px' />
        </div>
      ),
    },
    {
      title: 'Thao tác',
      key: 'id',
      dataIndex: 'id',
      render: (text: any, record: any): any => (
        <div className='cursor-pointer'>
          <EditIcon width='50px' />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await getAllPros();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <TitleContainer>
        <PageTitle>Điện thoại</PageTitle>
        <Link to='add'>
          <PlusSquareOutlined style={{ color: '#00B0D7', fontSize: '36px' }} />
        </Link>
      </TitleContainer>
      <Table dataSource={dataSource} tableLayout='fixed' columns={columns} />
    </>
  );
};

export const PageTitle = styled.div`
  color: #5f5e61;
  font-weight: 600;
  font-size: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px ;
`

export default ProductAdminPage;
