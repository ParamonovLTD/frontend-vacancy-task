import styled from 'styled-components';
import { Space, Statistic } from 'antd';

interface TokenPriceValueChangeProps {
  value: number;
}


export const TokenPriceWrapper = styled(Space)`
  & .ant-space-item-split {
    color: #93949D;
  }
`

export const TokenPriceValue = styled(Statistic)`
  & .ant-statistic-content {
    font-size: 18px;
    color: #6347F5;  
  }
`

export const TokenPriceValueChange = styled(Statistic)<TokenPriceValueChangeProps>`
  & .ant-statistic-content {
    font-size: 14px;
    color: #93949D;
    color: ${props => props.value && (props.value > 0 ? '#30BF8C' : '#FF647C') };
  }
`