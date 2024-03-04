export interface ICoin {
  id: string;
  priceUsd: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  rank: string;
  marketCapUsd: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
}

export interface IStoreCoins {
  coins: ICoin[];
  isLoading: boolean;
  error: string;
}

export interface IStoreCurrentCoin {
  coin: ICoin;
  isLoading: boolean;
  error: string;
}

export interface ICoinID {
  id: string;
}
