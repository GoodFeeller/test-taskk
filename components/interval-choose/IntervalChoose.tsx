import { FC } from 'react';
import IntervalItem from './interval-item/IntervalItem';
import styles from './IntervalChoose.module.scss';

const IntervalChoose: FC = () => (
  <nav className={styles.intervalBody}>
    <IntervalItem currInterval="m1" text="1 мин." />
    <IntervalItem currInterval="m5" text="5 мин." />
    <IntervalItem currInterval="m15" text="15 мин." />
    <IntervalItem currInterval="m30" text="30 мин." />
    <IntervalItem currInterval="h1" text="1 час" />
    <IntervalItem currInterval="h2" text="2 часа" />
    <IntervalItem currInterval="h6" text="6 часов" />
    <IntervalItem currInterval="h12" text="12 часов" />
    <IntervalItem currInterval="d1" text="1 день" />
  </nav>
);
export default IntervalChoose;
