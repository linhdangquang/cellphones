import React from 'react';
import styled from 'styled-components';
import CitiIcon from '../../assets/images/citi.png';
import MocaIcon from '../../assets/images/moca.png';
import RedivaIcon from '../../assets/images/rediva.png';
import VnpayIcon from '../../assets/images/vnpay.png';
import VpbankIcon from '../../assets/images/vpbank.png';
import DienThoaiVuiIcon from '../../assets/images/dienthoaivui.png';
type Props = {};

const MainFooterContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  justify-content: center;
  column-gap: 25px;
  width: 1200px;
  margin: 0 auto;  

  padding: 50px 0;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterItemTitle = styled.h2`
  font-size: 16px;
  color: #444444 !important;
`;

const FooterItemLink = styled.a<any>`
  font-size: 12px;
  color: ${(props) => (props.color ? props.color : '#444444')} !important;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  text-decoration: none;
`;

const PaymentMethod = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-items: center;
`;

const PaymentMethodItem = styled.div`
  width: 20%;
`;

const MainFooter = (props: Props) => {
  return (
    <MainFooterContainer>
      <FooterItem>
        <FooterItemTitle>Tìm cửa hàng</FooterItemTitle>
        <FooterItemLink>Tìm cửa hàng gần nhất</FooterItemLink>
        <FooterItemLink>Mua hàng từ xa</FooterItemLink>
        <FooterItemLink color='#FF0000'>
          Gặp trực tiếp cửa hàng gần nhất(Zalo hoặc gọi điện){' '}
        </FooterItemLink>
        <FooterItemTitle>Phương thức thanh toán</FooterItemTitle>
        <PaymentMethod>
          <PaymentMethodItem>
            <img src={CitiIcon} alt='citi' />
          </PaymentMethodItem>
          <PaymentMethodItem>
            <img src={RedivaIcon} alt='citi' />
          </PaymentMethodItem>
          <PaymentMethodItem>
            <img src={MocaIcon} alt='citi' />
          </PaymentMethodItem>
          <PaymentMethodItem>
            <img src={VnpayIcon} alt='citi' />
          </PaymentMethodItem>
          <PaymentMethodItem>
            <img src={VpbankIcon} alt='citi' />
          </PaymentMethodItem>
        </PaymentMethod>
      </FooterItem>
      <FooterItem>
        <FooterItemLink>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</FooterItemLink>
        <FooterItemLink>Gọi khiếu nại: 1800.2044 (8h00 - 22h00)</FooterItemLink>
        <FooterItemLink>Gọi bảo hành: 1800.2044 (8h00 - 22h00)</FooterItemLink>
        <FooterItemTitle>Đối tác bảo hành</FooterItemTitle>
        <FooterItemLink>Điện thoại - Máy tính</FooterItemLink>
        <FooterItemTitle>Trung tâm bảo hành ủy quyền Apple</FooterItemTitle>
        <FooterItemLink>
          <img src={DienThoaiVuiIcon} alt='dienthoaivui' />
        </FooterItemLink>
      </FooterItem>
      <FooterItem>
        <FooterItemLink>Mua hàng và thanh toán Online</FooterItemLink>
        <FooterItemLink>Mua hàng trả góp Online</FooterItemLink>
        <FooterItemLink>Tra thông tin đơn hàng</FooterItemLink>
        <FooterItemLink>Tra điểm Smember</FooterItemLink>
        <FooterItemLink>Tra thông tin bảo hành</FooterItemLink>
        <FooterItemLink fontWeight='600'>
          Tra cứu hoá đơn VAT điện tử
        </FooterItemLink>
        <FooterItemLink>Trung tâm bảo hành chính hãng</FooterItemLink>
        <FooterItemLink color='red'>Dịch vụ bảo hành điện thoại</FooterItemLink>
      </FooterItem>
      <FooterItem>
        <FooterItemLink>Quy chế hoạt động</FooterItemLink>
        <FooterItemLink>Chính sách Bảo hành</FooterItemLink>
        <FooterItemLink>Liên hệ hợp tác kinh doanh</FooterItemLink>
        <FooterItemLink>Khách hàng doanh nghiệp (B2B)</FooterItemLink>
        <FooterItemLink color='red'>Ưu đãi thanh toán</FooterItemLink>
        <FooterItemLink>Tuyển dụng</FooterItemLink>
      </FooterItem>
    </MainFooterContainer>
  );
};

export default MainFooter;
