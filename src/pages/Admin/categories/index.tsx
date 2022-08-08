import { DeleteOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Popconfirm, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from '../../../services/categories-api';
import { ReactComponent as EditIcon } from '../../../assets/images/Edit.svg';
import { PageTitle, TitleContainer } from '../products';

type Props = {};

const CategoriesAdminPage = (props: Props) => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const [delCategory] = useDeleteCategoryMutation();
  const [addCategory, { isLoading: isLoadingAddCategory }] =
    useAddCategoryMutation();
  const [form] = Form.useForm();
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
  const onAddCategory = async (values: any) => {
    try {
      await addCategory(values);
      form.resetFields();
      message.success('Thêm thành công');
    } catch (error) {
      message.error('Thêm mới thất bại');
    }
  };
  return (
    <>
      <>
        <TitleContainer>
          <PageTitle>Loại hàng</PageTitle>
        </TitleContainer>
        <div style={{ marginBottom: '20px' }}>
          <Form
            layout='inline'
            name='category-form'
            form={form}
            onFinish={onAddCategory}
          >
            <Form.Item
              name='name'
              rules={[{ required: true, message: 'Giá trị không được trống' }]}
            >
              <Input placeholder='Giá trị' />
            </Form.Item>
            <Form.Item
              name='displayName'
              rules={[{ required: true, message: 'Giá trị không được trống' }]}
            >
              <Input placeholder='Hiển thị' />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoadingAddCategory}
              >
                Thêm loại
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
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
