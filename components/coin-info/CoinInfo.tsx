'use client';

import { FC, memo } from 'react';
import Image from 'next/image';
import { useCurrentCoinInfo } from '@/hooks/useCurrentCoinInfo';
import DetailedCoinInfo from './detailed-coin-info/DetailedCoinInfo';
import styles from './CoinInfo.module.scss';

const CoinInfo: FC<{ id: string }> = ({ id }) => {
  const coin = useCurrentCoinInfo(id);
  const price = Number(coin.coin.priceUsd);
  return (
    <article className={styles.coinInfo}>
      {coin.error !== '' ? (
        <span style={{ color: 'red' }}>{coin.error}</span>
      ) : (
        <>
          {coin.isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <Image
                className={styles.coinInfo__image}
                src={`https://assets.coincap.io/assets/icons/${coin.coin.symbol.toLowerCase()}@2x.png`}
                height={50}
                width={50}
                alt=""
              />
              <span>{coin.coin.symbol}</span>
              <span>
                ${' '}
                {price > 0.001
                  ? Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(price)
                  : price}
              </span>
              <DetailedCoinInfo coin={coin} />
            </>
          )}
        </>
      )}
    </article>
  );
};
export default memo(CoinInfo);
