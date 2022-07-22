import { Button, Select, Table } from 'antd';
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
import { FormSelect } from '../../../components/Product/ProductForm';

const { Option } = Select;
const ProductAdminPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterInfo, setFilterInfo] = useState<any>([]);
  const dataSource = products?.map((item, idx) => {
    return { ...item, key: idx + 1 };
  });
  const setFilterValue = (value: any) => {
    setFilterInfo([value]);
  };
  const clearFilter = () => {
    setFilterInfo([]);
  };
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
      render: (text: any): any => <>{formatVND(text)}</>,
    },
    {
      title: 'Ảnh',
      key: 'image',
      dataIndex: 'image',
      render: (text: any): any => <img src={text} alt='product' width='100' />,
    },
    {
      title: 'Loại',
      key: 'categories',
      dataIndex: 'categories',
      // filters: [
      //   { text: 'Điện thoại', value: 'phone' },
      //   { text: 'Laptop', value: 'laptop' },
      //   { text: 'Máy tính bảng', value: 'tablet' },
      //   { text: 'Phụ kiện', value: 'accessories' },
      // ],
      filterIcon(filtered) {
        return null;
      },
      filteredValue: filterInfo || null,
      onFilter: (value: any, record) =>
        record?.categories?.indexOf(value) === 0,
      render: (text: any): any => {
        if (text === 'phone') {
          return <>Điện thoại</>;
        } else if (text === 'laptop') {
          return <>Laptop</>;
        } else if (text === 'tablet') {
          return <>Máy tính bảng</>;
        } else if (text === 'accessories') {
          return <>Phụ kiện</>;
        }
      },
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
      <FilterContainer>
        <div>Bộ lọc:</div>
        <SelectContainer>
          <div>
            <span>Danh mục sản phẩm</span>
            <FormSelect
              onSelect={setFilterValue}
              value={filterInfo}
              placeholder='Chọn loại'
              style={{ width: 300 }}
            >
              <Option value='phone'>Điện thoại</Option>
              <Option value='laptop'>Laptop</Option>
              <Option value='accessories'>Phụ kiện</Option>
              <Option value='tablet'>Máy tính bảng</Option>
            </FormSelect>
          </div>
          <Button onClick={clearFilter}>Xóa</Button>
        </SelectContainer>
      </FilterContainer>
      <Table
        loading={loading}
        dataSource={dataSource}
        tableLayout='fixed'
        columns={columns}
        size='small'
        pagination={{ showSizeChanger: true }}
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

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  div {
    display: grid;
    margin-right: 5px;
    span {
      font-size: 13px;
      color: #5a6169;
    }
  }
`;

export default ProductAdminPage;
