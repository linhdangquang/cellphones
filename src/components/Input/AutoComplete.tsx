import React, { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AutoCompleteAnt, Input } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { debounce } from 'lodash';
import { Link } from 'react-router-dom';
const { Option } = AutoCompleteAnt;

const AutoComplete: React.FC = () => {
  const [searchData, setSearchData] = useState<any>([]);

  function renderOption(item: any) {
    return (
      <Option >
        <div
          onClick={() => setSearchData([])}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link
            style={{
                width: '100%',
              color: '#000',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            to={`/products/${item.id}`}
          >
            <span className='global-search-item-desc'>{item.name}</span>
            <img src={item.image} alt={item.name} width={50} />
          </Link>
        </div>
      </Option>
    );
  }
  async function search(value: string) {
    console.log(value);
    if (value.length > 2) {
      const { data } = await axios.get(
        'http://localhost:3001/products?q=' + value
      );
      setSearchData(data);
      return data;
    }
    setSearchData([]);
    return;
  }
  const debouncedSearch = React.useRef(debounce(search, 500)).current;
  useEffect(() => {
    console.log(searchData);
  }, [searchData]);
  return (
    <AutoCompleteAnt
      dropdownClassName='certain-category-search-dropdown'
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      allowClear
      dataSource={searchData.map(renderOption)}
      onSearch={(value: string) => debouncedSearch(value)}
      open={searchData.length > 0}
    >
      <WrapperInput size='large' prefix={<SearchOutlined />} />
    </AutoCompleteAnt>
  );
};

const WrapperInput = styled(Input)`
  border: none;
  border-radius: 10px;
  width: 500px;
`;

export default AutoComplete;
