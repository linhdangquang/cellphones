import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AutoComplete, Input } from 'antd';
import { Layout } from 'antd';
import LogoImage from '../../../assets/images/logo.png';
import { SearchOutlined } from '@ant-design/icons';
const { Header } = Layout;

type Props = {};

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
`;

const HeaderAdmin = () => {
  const [user, setUser] = React.useState<any>(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);
    setUser(user);
  }, []);
  return (
    <HeaderCustom>
      <div className='logo-container'>
        <Logo src={LogoImage} />
        <h2>Dashboard</h2>
      </div>
      <SearchContainer>
        <SearchInput prefix={<SearchOutlined />} />
      </SearchContainer>
      <div className='user-header'>
        <h2>Xin chào {user?.user?.email.slice(0, user?.user?.email.indexOf('@'))}</h2>
      </div>
    </HeaderCustom>
  );
};

export default HeaderAdmin;
