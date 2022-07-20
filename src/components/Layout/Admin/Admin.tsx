import {
  PhoneOutlined,
  LaptopOutlined,
  TabletFilled,
  AudioOutlined,
  SettingOutlined,
  HddOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import HeaderAdmin from './Header';

const { Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  {
    key: 'listProduct',
    icon: <HddOutlined style={{ fontSize: '20px' }} />,
    label: <Link to='/admin/products'>Sản phẩm</Link>,
  },
  {
    key: 'cellphone',
    icon: <PhoneOutlined style={{ fontSize: '20px' }} />,
    label: <Link to='/admin'>Điện thoại</Link>,
  },
  {
    key: 'laptop',
    icon: <LaptopOutlined style={{ fontSize: '20px' }} />,
    label: <Link to='/admin'>Laptop</Link>,
  },
  {
    key: 'tablet',
    icon: <TabletFilled style={{ fontSize: '20px' }} />,
    label: <Link to='/admin'>Máy tính bảng</Link>,
  },
  {
    key: 'audio',
    icon: <AudioOutlined style={{ fontSize: '20px' }} />,
    label: <Link to='/admin'>Âm thanh</Link>,
  },
  {
    key: 'categories',
    icon: <SettingOutlined style={{ fontSize: '20px' }} />,
    label: <Link to='/admin/categories'>Categories</Link>,
  },
];

const AdminLayout: React.FC = () => (
  <Layout>
    <HeaderAdmin />
    <Layout>
      <Sider width={350} className='site-layout-background'>
        <MenuCustom
          mode='inline'
          defaultSelectedKeys={['listProduct']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            padding: '20px 50px 0 50px',
          }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const MenuCustom = styled(Menu)`
  .ant-menu-item {
    padding-left: 10px !important;
  }

  .ant-menu-item::after {
    display: none;
  }

  .ant-menu:not(.ant-menu-horizontal),
  .ant-menu-item-selected {
    background-color: #00b0d7 !important;
    color: #fff !important;
    border-radius: 10px !important;
  }

  .ant-menu:not(.ant-menu-horizontal),
  .ant-menu-item-selected .ant-menu-title-content a {
    color: #fff !important;
  }
`;

const ContentCustom = styled(Content)`
  min-height: 100vh;
  padding: 20px;
`;

export default AdminLayout;
