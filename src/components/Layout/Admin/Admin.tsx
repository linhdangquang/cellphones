import {
  PhoneOutlined,
  LaptopOutlined,
  TabletFilled,
  AudioOutlined,
  SettingOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { AutoComplete, Input, MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import LogoImage from '../../../assets/images/logo.png';
import './admin.css';

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  {
    key: 'cellphone',
    icon: <PhoneOutlined />,
    label: <Link to='/admin/products'>Điện thoại</Link>,
  },
  {
    key: 'laptop',
    icon: <LaptopOutlined />,
    label: <Link to='/admin'>Laptop</Link>,
  },
  {
    key: 'tablet',
    icon: <TabletFilled />,
    label: <Link to='/admin'>Máy tính bảng</Link>,
  },
  {
    key: 'audio',
    icon: <AudioOutlined />,
    label: <Link to='/admin'>Âm thanh</Link>,
  },
  {
    key: 'categories',
    icon: <SettingOutlined />,
    label: <Link to='/admin/categories'>Categories</Link>,
  },
];

const AdminLayout: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <div className='logo-container'>
        <Logo src={LogoImage} />
        <h2>Dashboard</h2>
      </div>
      <SearchContainer>
        <SearchInput prefix={<SearchOutlined />} />
      </SearchContainer>
      <div className='user-header'>
        <h2>Xin chào Đặng Quang Linh</h2>
      </div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
    <Layout>
      <Sider width={200} className='site-layout-background'>
        <Menu
          mode='inline'
          defaultSelectedKeys={['cellphone']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
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

const HeaderCustom = styled(Header)`
  background-color: #00b0d7;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 0;
    margin-left: 16px;
  }
`;

const Logo = styled.img`
  width: 64px;
  height: auto;
`;

const SearchContainer = styled(AutoComplete)`
  width: 50%;
`;

const SearchInput = styled(Input)`
  width: 100%;
  border-radius: 5px;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`;

export default AdminLayout;
