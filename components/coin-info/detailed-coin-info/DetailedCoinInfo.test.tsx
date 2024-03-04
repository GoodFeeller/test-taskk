import { render, screen } from '@testing-library/react';
import DetailedCoinInfo from './DetailedCoinInfo';
import { IStoreCurrentCoin } from '@/types/coin';

const coinGreen: IStoreCurrentCoin = {
    isLoading: false,
    error: '',
    coin: {
      name: 'bitcoin',
      id: 'bitcoin',
      priceUsd: '100',
      changePercent24Hr: '2',
      volumeUsd24Hr: '2',
      marketCapUsd: '100',
      symbol: 'BTC',
      supply: '1',
      maxSupply: '2',
      rank: '1',
    },
}
const coinRed: IStoreCurrentCoin = {
    isLoading: false,
    error: '',
    coin: {
      name: 'bitcoin',
      id: 'bitcoin',
      priceUsd: '100',
      changePercent24Hr: '-2',
      volumeUsd24Hr: '-2',
      marketCapUsd: '100',
      symbol: 'BTC',
      supply: '1',
      maxSupply: '2',
      rank: '1',
    },
}

describe('Detailed coin info test', () => {
  test('Green test', () => {
    render(
      <DetailedCoinInfo coin={coinGreen} />
    );
    const detailed = screen.queryAllByTestId('detailed');
    expect(detailed).toMatchSnapshot();
  });
  test('Red test', () => {
    render(
        <DetailedCoinInfo coin={coinRed} />
    )
    const detailed = screen.queryAllByTestId('detailed');
    expect(detailed).toMatchSnapshot();
  })
});
