import React from 'react';
import { Col, Space } from 'antd';
import { TokenPriceValue, TokenPriceValueChange, TokenPriceWrapper } from './styles';
import { Token } from '../../../../../../interfaces/tokens';

interface TokenPriceProps {
  token: Token;
  layout?: any;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ token, layout }) => {
  return (
    <Col {...layout}>
      <Space direction='vertical'>
        <TokenPriceValue suffix='$' value={token.value} />

        <TokenPriceWrapper split='•'>
          {[token.changePerDay, token.changePerMonth, token.changePerYear].map((value, index) => (
            <TokenPriceValueChange
              value={value}
              suffix='%'
              formatter={(value) => <div>{value > 0 && '+'}{value}</div>}
              key={index}
            />
          ))}
        </TokenPriceWrapper>
      </Space>
    </Col>
  );
};

export default TokenPrice;