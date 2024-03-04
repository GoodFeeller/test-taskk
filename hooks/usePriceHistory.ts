import { AppState } from '@/store/store';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { useEffect, useState } from 'react';
import { getPriceHistory } from '@/store/price-history/priceHistory.action';
import { IPriceHistory } from '@/types/priceHistory';
import { TInterval } from '@/types/intervals';

export const usePriceHistory = (id: string) => {
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>();
  const dispatch = useAppDispatch();
  const { priceHistory, interval } = useAppSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getPriceHistory({ id, interval: interval.intrval }));
    reloadData();
  }, [interval]);

  const reloadData = () => {
    window.clearTimeout(timeoutID);
    setTimeoutID(
      setTimeout(() => {
        dispatch(getPriceHistory({ id, interval: interval.intrval }));
        reloadData();
      }, 60000)
    );
  };

  const formatData = (data: IPriceHistory[], interval: TInterval) => {
    const info: IPriceHistory[] = [];
    if (data.length != 0)
      switch (interval) {
        case 'm1':
        case 'm5':
        case 'm15':
        case 'm30': {
          return data;
        }
        case 'h1':
        case 'h2':
        case 'h6':
        case 'h12': {
          data.forEach((item) => {
            info.push({ date: item.date.slice(0, 13), priceUsd: item.priceUsd });
          });
          return info;
        }
        case 'd1': {
          data.forEach((item) => {
            info.push({ date: item.date.slice(0, 10), priceUsd: item.priceUsd });
          });
          return info;
        }
      }
    else return [];
  };

  return {
    data: formatData(priceHistory.history, interval.intrval),
    isLoading: priceHistory.isLoading,
    error: priceHistory.error,
  };
};
