import styled from 'styled-components';
import { Col, Row } from 'antd';

export const TokenHeaderWrapper = styled(Row)`
  width: 100%;
  padding: 24px;
  row-gap: 32px !important;
  
  & * {
    font-weight: 500 !important;
    line-height: 120% !important;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    row-gap: 24px !important;
  }
`

export const TokenPlace = styled(Col)`
  font-size: 18px;
  color: #93949D;
`