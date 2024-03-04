'use client';

import { FC } from 'react';
import styles from '../IntervalChoose.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { AppState } from '@/store/store';
import { setCurrInterval } from '@/store/interval/interval.slice';
import { TInterval } from '@/types/intervals';

const IntervalItem: FC<{ currInterval: TInterval; text: string }> = ({ currInterval, text }) => {
  const dispatch = useAppDispatch();
  const { interval } = useAppSelector((state: AppState) => state);
  return (
    <section
      className={`${styles.intervalBody__item} ${
        interval.intrval === currInterval ? styles.intervalBody__item_choosen : ''
      }`}
      onClick={() => dispatch(setCurrInterval(currInterval))}
    >
      {text}
    </section>
  );
};
export default IntervalItem;
