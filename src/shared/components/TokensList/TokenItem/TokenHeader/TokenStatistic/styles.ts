import styled from 'styled-components';
import { Statistic } from 'antd';

export const TokenStatisticValue = styled(Statistic)`
  & .ant-statistic-content {
    font-size: 18px;
  }
  
  & .ant-statistic-content-prefix {
    margin-right: 8px;
  }
`

export const TokenStatisticPercentage = styled(Statistic)`
  & .ant-statistic-content {
    font-size: 16px;
    color: #6347F5;  
  }
  
  & .ant-statistic-content-suffix {
    margin-left: 0;
  }
`