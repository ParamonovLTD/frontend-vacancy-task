import React from 'react';
import { Token } from '../../../../interfaces/tokens';
import { TokenArrow, TokenDescription, TokenWrapper } from './styles';
import TokenHeader from './TokenHeader';

export interface TokenItemProps {
  token: Token;
}

const TokenItem: React.FC<TokenItemProps> = ({ token }) => {
  return (
    <TokenWrapper
      expandIconPosition='right'
      expandIcon={({ isActive }) =>
        <TokenArrow src='./images/arrow.svg' width={19} height={11} alt='arrow' isActive={isActive} />
    }
    >
      <TokenDescription header={<TokenHeader token={token} />} key={token.id}>
        {token.description}
      </TokenDescription>
    </TokenWrapper>
  );
};

export default TokenItem;