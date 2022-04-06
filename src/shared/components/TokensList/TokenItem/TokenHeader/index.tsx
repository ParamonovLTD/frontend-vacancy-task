import React from 'react';
import { TokenItemProps } from '../index';
import TokenStatistic from './TokenStatistic';
import TokenPreview from './TokenPreview';
import TokenPrice from './TokenPrice';
import { TokenHeaderWrapper, TokenPlace } from './styles';

const layout = {
  xl: {
    span: 4
  },
  md: {
    span: 8
  },
  xs: {
    span: 12
  }
}

const TokenHeader: React.FC<TokenItemProps> = ({ token }) => {
  return (
    <TokenHeaderWrapper align='middle'>
      <TokenPlace span={1}>
        #{token.id}
      </TokenPlace>

      <TokenPreview token={token} span={7}/>

      <TokenPrice token={token} layout={layout} />

      <TokenStatistic
        value={token.volume}
        suffix='$'
        percentValue={token.volumeChange}
        layout={layout}
      />

      <TokenStatistic
        value={token.tvl}
        suffix='$'
        percentValue={token.tvlChange}
        layout={layout}
      />

      <TokenStatistic
        value={token.contributors}
        prefixImgUrl='users.svg'
        layout={layout}
      />
    </TokenHeaderWrapper>
  );
}

export default TokenHeader;