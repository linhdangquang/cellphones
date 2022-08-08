import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BreadCrumbPageContainer = styled.div`
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 5px 135px;
`;

const BreadCrumbContainer = styled(Breadcrumb)`
  ol {
    display: flex;
    flex-direction: row;
    gap: 35px;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
`;

type Props = {
  breadcrumbItems: Array<any>;
};

const BreadCrumbPage = ({ breadcrumbItems }: Props) => {
  return (
    <BreadCrumbPageContainer>
      <BreadCrumbContainer separator=''>
        {breadcrumbItems.map((item, index) => (
          <Breadcrumb.Item key={index}>
            <Link
              to={item?.link}
              style={{ fontSize: '12px', color: '#707070' }}
            >
              {item?.name}
            </Link>
          </Breadcrumb.Item>
        ))}
      </BreadCrumbContainer>
    </BreadCrumbPageContainer>
  );
};

export default BreadCrumbPage;
