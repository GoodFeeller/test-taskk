import { AppState } from '@/store/store';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { ICoin } from '@/types/coin';
import { useEffect, useState } from 'react';
import { getAssets } from '@/store/coins/coins.actions';

export const useSortAutorealoadCoins = () => {
  const dispatch = useAppDispatch();
  const { sort, coins } = useAppSelector((state: AppState) => state);

  useEffect(() => {
    if (coins.coins.length == 0) {
      dispatch(getAssets());
      reloadData();
    }
  }, []);

  const reloadData = () => {
    setTimeout(() => {
      dispatch(getAssets());
      reloadData();
    }, 60000);
  };

  const sortCoins = (a: ICoin, b: ICoin) => {
    const first = Number(a[sort.item]);
    const second = Number(b[sort.item]);
    return sort.up ? first - second : second - first;
  };

  return {
    coins: [...coins.coins].sort(sortCoins),
    isLoading: coins.isLoading,
    error: coins.error,
  };
};
