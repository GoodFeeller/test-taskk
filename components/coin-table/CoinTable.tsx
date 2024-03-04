import { FC } from 'react';
import TableHeader from './table-header/TableHeader';
import styles from './CoinTable.module.scss';
import TableBody from './table-body/TableBody';

const CoinTable: FC = () => (
  <table className={styles.table}>
    <TableHeader />
    <TableBody />
  </table>
);
export default CoinTable;
