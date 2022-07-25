import { Button, Image, message, Popconfirm, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { ColumnsType } from 'antd/es/table';
import { formatVND } from '../../../utils/formatVND';
import {
  changeStatusProduct,
  deleteProduct,
  getAllPros,
} from '../../../api/products';
import { ReactComponent as ToogleIcon } from '../../../assets/images/Toggle-on.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';
import './products.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { FormSelect } from '../../../components/Product/ProductForm';

const { Option } = Select;
const ProductAdminPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterInfo, setFilterInfo] = useState<any>([]);
  console.log(filterInfo);
  const dataSource = products?.map((item, idx) => {
    return { ...item, key: idx + 1 };
  });
  const setFilterValue = (value: any) => {
    setFilterInfo([value]);
  };
  const clearFilter = () => {
    setFilterInfo([]);
  };
  const changeStatus = async (id: any) => {
    try {
      setLoading(true);
      const data = products.find((item: any) => item.id === id);
      await changeStatusProduct({ ...data, status: !data.status });
      message.success('Thay đổi trạng thái thành công');
    } catch (error) {
      message.error('Thay đổi trạng thái thất bại');
    } finally {
      setLoading(false);
    }
  };
  const onConfirmDelete = async (id: any) => {
    console.log(id);
    await deleteProduct(id);
    message.success('Xóa thành công');
    setProducts(products.filter((item: any) => item.id !== id));
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
      render: (text: any): any => (
        <Image src={text} alt='product' width={100} />
      ),
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
      render: (text: any, record): any => {
        console.log(record.status);
        if (record.status === true)
          return (
            <div className='cursor-pointer'>
              <Popconfirm
                title='Thay đổi trạng thái hiện thị?'
                okText='Có'
                cancelText='Không'
                onConfirm={() => changeStatus(text)}
              >
                <ToogleIcon width='50px' />
              </Popconfirm>
            </div>
          );
        else {
          return (
            <div className='cursor-pointer'>
              <Popconfirm
                title='Thay đổi trạng thái hiện thị?'
                okText='Có'
                cancelText='Không'
                onConfirm={() => changeStatus(text)}
              >
                <svg
                  width='22'
                  height='14'
                  viewBox='0 0 22 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.99988 10.5C5.21504 10.5 3.72206 9.13698 3.53586 7.36813C3.51022 7.12454 3.51022 6.87546 3.53586 6.63187C3.72206 4.86302 5.21504 3.5 6.99987 3.5C8.78471 3.5 10.2777 4.86302 10.4639 6.63187C10.4895 6.87546 10.4895 7.12454 10.4639 7.36813C10.2777 9.13698 8.78471 10.5 6.99988 10.5Z'
                    fill='black'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.07422 13.75H14.9256C18.2471 13.75 21.0749 11.3336 21.593 8.05275C21.7031 7.35524 21.7031 6.64476 21.593 5.94725C21.0749 2.6664 18.247 0.25 14.9256 0.25H7.07422C3.75272 0.25 0.924847 2.6664 0.406819 5.94725C0.296685 6.64476 0.296685 7.35524 0.406819 8.05275C0.924848 11.3336 3.75272 13.75 7.07422 13.75ZM7.07422 12.25C4.49083 12.25 2.29137 10.3706 1.88846 7.8188C1.8028 7.2763 1.8028 6.72371 1.88846 6.1812C2.29137 3.62942 4.49083 1.75 7.07422 1.75L14.9256 1.75C17.5089 1.75 19.7084 3.62942 20.1113 6.18119C20.197 6.7237 20.197 7.27629 20.1113 7.8188C19.7084 10.3706 17.5089 12.25 14.9256 12.25H7.07422Z'
                    fill='black'
                  />
                </svg>
              </Popconfirm>
            </div>
          );
        }
      },
    },
    {
      title: 'Thao tác',
      key: 'id',
      dataIndex: 'id',
      render: (text: any): any => (
        <>
          <div
            className='cursor-pointer'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Link to={`edit/${text}`}>
              <EditIcon width='50px' />
            </Link>
            <Popconfirm
              title='Bạn chắc chắn muốn xóa?'
              okText='Có'
              cancelText='Không'
              onConfirm={() => onConfirmDelete(text)}
            >
              <DeleteOutlined style={{ fontSize: '22px' }} />
            </Popconfirm>
          </div>
        </>
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
  }, [loading]);
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
          {filterInfo.length > 0 && <Button onClick={clearFilter}>Xóa</Button>}
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
