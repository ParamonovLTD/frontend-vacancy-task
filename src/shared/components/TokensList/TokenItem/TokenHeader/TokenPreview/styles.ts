import styled from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

export const TokenTitle = styled(Typography.Title)`
  &.ant-typography {
    margin: 0;
    font-size: 21px;
    color: #000000;  
  }
`

export const TokenSymbol = styled(Link)`
  position: relative;
  font-size: 16px;
  color: #6347f5;

  &:hover {
    color: #6347f5;
    
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #6347f5;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
`