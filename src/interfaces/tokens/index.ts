export type TokenCategory = 'defi' | 'dex' | 'games' | 'wallets'

export interface Token {
  id: string;
  name: string;
  chainId: number;
  symbol: string;
  decimals: number;
  address: string;
  logoURI: string;
  categories: TokenCategory[];
  description: string;
  value: number;
  changePerDay: number;
  changePerMonth: number;
  changePerYear: number;
  volume: number;
  volumeChange: number;
  tvl: number;
  tvlChange: number;
  contributors: number;
}