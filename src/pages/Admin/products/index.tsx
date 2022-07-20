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
  const [loading, setLoading] = useState(false);
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
      sorter: (a: any, b: any) => a.originalPrice - b.originalPrice,
      render: (text: any): any => <p>{formatVND(text)}</p>,
    },
    {
      title: 'Ảnh',
      key: 'image',
      dataIndex: 'image',
      render: (text: any): any => (
        <img src={text} alt="product" width="100" />
      )
    },
    {
      title: 'Loại',
      key: 'categories',
      dataIndex: 'categories',
      filters: [
        { text: 'Điện thoại', value: 'phone' },
        { text: 'Laptop', value: 'laptop' },
        { text: 'Máy tính bảng', value: 'tablet' },
        { text: 'Phụ kiện', value: 'accessories' },

      ],
      onFilter: (value:any, record) => record?.categories?.indexOf(value) === 0,
      render: (text: any, record): any => {
        if (text === 'phone') {
          return <p>Điện thoại</p>;
        } else if (text === 'laptop') {
          return <p>Laptop</p>;
        } else if (text === 'tablet') {
          return <p>Máy tính bảng</p>;
        } else if (text === 'accessories') {
          return <p>Phụ kiện</p>;
        }
      }
    },
    {
      title: 'Ẩn/hiện',
      key: 'id',
      dataIndex: 'id',
      render: (text: any): any => (
        <div className='cursor-pointer'>
          <ToogleIcon width='50px' />
        </div>
      ),
    },
    {
      title: 'Thao tác',
      key: 'id',
      dataIndex: 'id',
      render: (text: any): any => (
        <div className='cursor-pointer'>
          <Link to={`edit/${text}`}>
            <EditIcon width='50px' />
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const { data } = await getAllPros();
      setLoading(false);
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
      <Table
        loading={loading}
        dataSource={dataSource}
        tableLayout='fixed'
        columns={columns}
      />
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
  margin-bottom: 15px;
`;

export default ProductAdminPage;
