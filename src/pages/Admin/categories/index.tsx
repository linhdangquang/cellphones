import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { message, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from '../../../services/categories-api';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';
import { PageTitle, TitleContainer } from '../products';

type Props = {};

const CategoriesAdminPage = (props: Props) => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const [delCategory] = useDeleteCategoryMutation();
  const dataSource = data?.map((item, idx) => ({ ...item, key: idx + 1 }));
  const columns: ColumnsType<any> = [
    {
      title: '#',
      key: 'key',
      dataIndex: 'key',
    },
    {
      title: 'Tên loại',
      key: 'name',
      dataIndex: 'name',
      render: (text: any): any => {
        const category = data?.find((item) => item.name === text);
        return category?.displayName;
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
  const onConfirmDelete = async (id: number) => {
    try {
      await delCategory(id);
      message.success('Xóa thành công');
    } catch (err) {
      message.error('Xóa thất bại');
    }
  };
  return (
    <>
      <TitleContainer>
        <PageTitle>Điện thoại</PageTitle>
        <Link to='add'>
          <PlusSquareOutlined style={{ color: '#00B0D7', fontSize: '36px' }} />
        </Link>
      </TitleContainer>
      {error ? (
        <h1>Error</h1>
      ) : (
        <Table
          loading={isLoading}
          dataSource={dataSource}
          columns={columns}
          size='small'
          pagination={{ showSizeChanger: true }}
        />
      )}
    </>
  );
};

export default CategoriesAdminPage;
