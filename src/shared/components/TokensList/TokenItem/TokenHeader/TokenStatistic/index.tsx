import React from 'react';
import { Col, Space } from 'antd';
import { TokenStatisticPercentage, TokenStatisticValue } from './styles';

interface TokenStatisticProps {
  value: number;
  suffix?: string;
  percentValue?: number;
  prefixImgUrl?: string;
  layout?: any;
}

const TokenStatistic: React.FC<TokenStatisticProps> = ({ value, suffix, percentValue, prefixImgUrl, layout }) => {
  return (
    <Col {...layout}>
      <Space align='start' size={16}>
        <TokenStatisticValue
          value={value}
          groupSeparator=' '
          suffix={suffix}
          prefix={prefixImgUrl && <img src={`./images/${prefixImgUrl}`} width={20} height={20} alt='people icon' />}
        />
        {percentValue &&
          <TokenStatisticPercentage value={percentValue} suffix='%' />
        }
      </Space>
    </Col>
  );
};

export default TokenStatistic;