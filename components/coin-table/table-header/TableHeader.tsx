import { FC, memo } from 'react';
import THItem from './th-item/THItem';
import styles from '../CoinTable.module.scss';

const TableHeader: FC = () => (
  <thead>
    <tr className={styles.tableHeader}>
      <THItem text="Название" />
      <THItem text="Цена" param="priceUsd" />
      <THItem text="Изменение 24ч" param="changePercent24Hr" />
      <THItem text="Объём за 24ч" param="volumeUsd24Hr" />
      <THItem text="Капиталицация" param="marketCapUsd" />
    </tr>
  </thead>
);

export default memo(TableHeader);
