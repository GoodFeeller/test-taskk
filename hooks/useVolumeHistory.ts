import { AppState } from '@/store/store';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { useEffect, useState } from 'react';
import { getVolumeHistory } from '@/store/volume-history/volumeHistory.actions';

export const useVolumeHistory = (id: string) => {
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>();
  const dispatch = useAppDispatch();
  const { volumeHistory, interval, candlesParams } = useAppSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(
      getVolumeHistory({
        id,
        interval: interval.intrval,
        quote: candlesParams.coin,
        exchange: candlesParams.exchange,
      })
    );
    reloadData();
  }, [interval, candlesParams]);

  const reloadData = () => {
    window.clearTimeout(timeoutID);
    setTimeoutID(
      setTimeout(() => {
        dispatch(
          getVolumeHistory({
            id,
            interval: interval.intrval,
            quote: candlesParams.coin,
            exchange: candlesParams.exchange,
          })
        );
        reloadData();
      }, 60000)
    );
  };

  return volumeHistory;
};
