'use client';

import { FC } from 'react';
import CoinItem from './coin-item/CoinItem';
import styles from '../CoinTable.module.scss';
import { useSortAutorealoadCoins } from '@/hooks/useSortAutoreloadCoins';

const TableBody: FC = () => {
  const { coins, isLoading, error } = useSortAutorealoadCoins();
  return (
    <tbody className={`${styles.tableBody} ${isLoading ? styles.tableBody_loading : ''}`}>
      {error !== '' ? (
        <span className={styles.tableBody__error}>{error}</span>
      ) : isLoading ? (
        <span className={styles.tableBody__load}>Loading</span>
      ) : (
        coins.map((coin) => <CoinItem key={coin.rank} coin={coin} />)
      )}
    </tbody>
  );
};
export default TableBody;
