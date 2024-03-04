'use client';

import { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { AppState } from '@/store/store';
import { setSort } from '@/store/sort/sort.slice';
import styles from '../../CoinTable.module.scss';

interface IProps {
  text: string;
  param?: 'priceUsd' | 'marketCapUsd' | 'changePercent24Hr' | 'volumeUsd24Hr';
}
const THItem: FC<IProps> = ({ text, param }) => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector((state: AppState) => state);
  return (
    <th>
      {text}
      {text === 'Название' ? (
        <></>
      ) : (
        <svg
          onClick={() => dispatch(setSort(param))}
          className={styles.tableHeader__sortBtn}
          width="9"
          height="18"
          viewBox="0 0 9 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 0L8.39711 8.1H0.602886L4.5 0Z"
            fill={sort.item === param && sort.up === true ? '#F8EF15' : 'white'}
          />
          <path
            d="M4.5 18L0.602887 9.9L8.39712 9.9L4.5 18Z"
            fill={sort.item === param && sort.up === false ? '#F8EF15' : 'white'}
          />
        </svg>
      )}
    </th>
  );
};

export default memo(THItem);
