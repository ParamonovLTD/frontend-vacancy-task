// @ts-ignore
import React, { useMemo, useDeferredValue } from 'react';
import { Token } from '../../../interfaces/tokens';
import TokenItem from './TokenItem';
import { TokensListWrapper } from './styles';
import { IFilterContext } from '../../../interfaces/filter';
import { FilterContext } from '../../../context/FilterContex';

interface TokensListProps {
  tokens: Token[];
}

const TokensList: React.FC<TokensListProps> = ({ tokens }) => {
  const filterContext = React.useContext<IFilterContext>(FilterContext);
  const filter = filterContext.id

  const filteredTokens = useMemo(() => {
    if (filter === 'all') return tokens
    return tokens.filter(token => token.categories.includes(filter))
  }, [filterContext])

  const deferredTokens: Token[] = useDeferredValue(filteredTokens);

  return (
    <TokensListWrapper direction='vertical' style={{width: '100%'}}>
      {deferredTokens.map(token => (
        <TokenItem token={token} key={token.id} />
      ))}
    </TokensListWrapper>
  );
};

export default TokensList;