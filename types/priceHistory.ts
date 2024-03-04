export interface IPriceHistory {
  date: string;
  priceUsd: string;
}

export interface IStorePriceHistory {
  history: IPriceHistory[];
  isLoading: boolean;
  error: string;
}
