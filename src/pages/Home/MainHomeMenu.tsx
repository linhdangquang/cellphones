import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  DesktopOutlined,
  DollarCircleOutlined,
  HomeOutlined,
  LaptopOutlined,
  MobileOutlined,
  ProfileOutlined,
  RollbackOutlined,
  TabletOutlined,
  UsbOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
type Props = {};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <Link to='phone'>Điện thoại</Link>,
    'sub1',
    <Link to='phone'>
      {' '}
      <MobileOutlined style={{ fontSize: '24px' }} />
    </Link>,
    [
      getItem(
        'Item 1',
        null,
        null,
        [getItem('Option 1', '1'), getItem('Option 2', '2')],
        'group'
      ),
      getItem(
        'Item 2',
        null,
        null,
        [getItem('Option 3', '3'), getItem('Option 4', '4')],
        'group'
      ),
    ]
  ),
  getItem(
    <Link to='laptop'>Laptop</Link>,
    'sub2',
    <Link to='laptop'>
      {' '}
      <LaptopOutlined style={{ fontSize: '24px' }} />
    </Link>,
    [
      getItem(
        'Item 1',
        null,
        null,
        [getItem('Option 1', '7'), getItem('Option 2', '6')],
        'group'
      ),
      getItem(
        'Item 2',
        null,
        null,
        [getItem('Option 3', '10'), getItem('Option 4', '12')],
        'group'
      ),
    ]
  ),
  getItem(
    <Link to='maytinhbang'>Máy tính bảng</Link>,
    'sub6',
    <Link to='maytinhbang'>
      {' '}
      <TabletOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='amthanh'>Âm thanh</Link>,
    'sub7',
    <Link to='amthanh'>
      {' '}
      <CustomerServiceOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='dongho'>Đồng hồ</Link>,
    'sub8',
    <Link to='dongho'>
      {' '}
      <ClockCircleOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='nhathongminh'>Nhà thông minh</Link>,
    'sub9',
    <Link to='nhathongminh'>
      {' '}
      <HomeOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='phukien'>Phụ kiện</Link>,
    'sub10',
    <Link to='phukien'>
      {' '}
      <UsbOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='pc'>PC - Màn hình</Link>,
    'sub11',
    <Link to='pc'>
      {' '}
      <DesktopOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='tivi'>Tivi</Link>,
    'sub12',
    <Link to='tivi'>
      {' '}
      <WalletOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='thucu'>Thu cũ</Link>,
    'sub13',
    <Link to='thucu'>
      {' '}
      <RollbackOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='hangcu'>Hàng cũ</Link>,
    'sub14',
    <Link to='hangcu'>
      {' '}
      <CheckCircleOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='khuyenmai'>Khuyến mãi</Link>,
    'sub15',
    <Link to='khuyenmai'>
      {' '}
      <DollarCircleOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
  getItem(
    <Link to='tincongnghe'>Tin công nghệ</Link>,
    'sub16',
    <Link to='tincongnghe'>
      {' '}
      <ProfileOutlined style={{ fontSize: '24px' }} />
    </Link>,
    []
  ),
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const MainHomeMenu = (props: Props) => {
  return (
    <MainMenu
      onClick={onClick}
      style={{ width: 256 }}
      mode='vertical'
      items={items}
    />
  );
};

const MainMenu = styled(Menu)`
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%) !important;
  padding: 2.5px 0;
  .ant-menu-submenu .ant-menu-submenu-title {
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 2px;
    margin-top: 2px;
    height: 30px;
  }
  .ant-menu-submenu .ant-menu-submenu-title .ant-menu-item-icon {
    font-size: 20px;
  }
  .ant-menu-submenu .ant-menu-submenu-title .ant-menu-title-content {
    flex: 1;
    margin-left: 0;
  }
  .ant-menu-submenu .ant-menu-submenu-title .ant-menu-title-content a {
    padding-left: 10px;
    display: block;
    color: #343a40 !important;
  }
`;

export default MainHomeMenu;
