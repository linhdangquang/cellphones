import React from 'react';
import styled from 'styled-components';
type Props = {};

const BottomFooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(1200px / 3));
  padding: 25px 50px;
  margin: 0 auto;  
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
 
`;

const BottomFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;

  a {
    color: #444444 !important;
    font-size: 10px;
  }
`;

const Copyright = styled.div`
  background-color: #F8F8F8;
  text-align: center;
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 10px;
  }
  padding-bottom: 35px;
`

const BottomFooter = (props: Props) => {
  return (
    <>
    <BottomFooterContainer>
      <BottomFooterItem>
        <a href='/'>
          Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
        </a>
        <a href='/'>
        Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
        </a>
        <a href='/'>
        iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
        </a>
      </BottomFooterItem>
      <BottomFooterItem>
        <a href='/'>
        Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A
        </a>
        <a href='/'>
        Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia
        </a>
        <a href='/'>
        Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
        </a>
      </BottomFooterItem>
      <BottomFooterItem>
      <a href='/'>
      Laptop - Laptop HP - Laptop Dell - Laptop Acer
        </a>
        <a href='/'>
        Microsoft Surface - Laptop Lenovo - Laptop Asus
        </a>
        <a href='/'>
        Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình
        </a>
      </BottomFooterItem>
    </BottomFooterContainer>
    <Copyright>
      <span>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</span>
    </Copyright>
    </>
  );
};

export default BottomFooter;
