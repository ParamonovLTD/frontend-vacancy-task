import React from 'react';
import { Col, Space } from 'antd';
import { Token } from '../../../../../../interfaces/tokens';
import { TokenSymbol, TokenTitle } from './styles';

interface TokenPreviewProps {
  token: Token;
  span?: number;
}

const TokenPreview: React.FC<TokenPreviewProps> = ({ token, span }) => {
  return (
    <Col span={span}>
      <Space size={20}>
        <img src={token.logoURI} width={40} height={40} alt='token logo' />
        <Space direction='vertical' size={0}>
          <TokenTitle level={2}>{token.name}</TokenTitle>
          <TokenSymbol to={'/token/' + token.id}>{token.symbol}</TokenSymbol>
        </Space>
      </Space>
    </Col>
  );
};

export default TokenPreview;