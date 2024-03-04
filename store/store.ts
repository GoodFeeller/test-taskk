import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coins from './coins/coins.slice';
import sort from './sort/sort.slice';
import currentCoin from './current-coin/currentCoin.slice';
import priceHistory from './price-history/priceHistory.slice';
import volumeHistory from './volume-history/volumeHistory.slice';
import interval from './interval/interval.slice';
import candlesParams from './candles-params/candlesParams.slice';

const combine = combineReducers({
  coins,
  sort,
  currentCoin,
  priceHistory,
  volumeHistory,
  interval,
  candlesParams,
});
export const makeStore = () => {
  return configureStore({
    reducer: combine,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
