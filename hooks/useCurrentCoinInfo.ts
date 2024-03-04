import { AppState } from '@/store/store';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { useEffect } from 'react';
import { getAssets } from '@/store/coins/coins.actions';
import { getCurrentCoin } from '@/store/current-coin/currentCoin.action';

export const useCurrentCoinInfo = (id: string) => {
  const dispatch = useAppDispatch();
  const { currentCoin } = useAppSelector((state: AppState) => state);

  useEffect(() => {
    if (currentCoin.coin.id != id) {
      dispatch(getCurrentCoin(id));
      reloadData();
    }
  }, []);

  const reloadData = () => {
    setTimeout(() => {
      dispatch(getAssets());
      reloadData();
    }, 60000);
  };

  return currentCoin;
};
