'use client';

import { NativeSelect } from '@mantine/core';
import { FC, memo } from 'react';
import styles from './CandlesInput.module.scss';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setCoinId, setExchangeId } from '@/store/candles-params/candlesParams.slice';
import { IExchange } from '@/types/exchanges';
import { ICoinID } from '@/types/coin';

const CandlesInput: FC<{ exchanges: IExchange[]; ids: ICoinID[] }> = async ({ ids, exchanges }) => {
  const dispatch = useAppDispatch();
  return (
    <nav className={styles.inputBody}>
      <NativeSelect
        onChange={(e) => dispatch(setExchangeId(e.target.value))}
        data={exchanges.map((i) => i.exchangeId)}
        label="Обменник"
        className={styles.inputBody__input}
      />
      <NativeSelect
        onChange={(e) => dispatch(setCoinId(e.target.value))}
        data={ids.map((i) => i.id)}
        label="Монета"
        className={styles.inputBody__input}
      />
    </nav>
  );
};
export default memo(CandlesInput);
