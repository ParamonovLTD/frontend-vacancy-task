import styled from 'styled-components';
import { Typography } from 'antd';

export const PageTitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    font-weight: 500;
    font-size: 36px;
    line-height: 120%;
    color: #000000;  
  }
`

export const MainContainer = styled.div`
  max-width: 1344px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 66px 20px 40px;
  
  @media (max-width: 768px) {
    padding: 20px 20px 40px;
  }
`;