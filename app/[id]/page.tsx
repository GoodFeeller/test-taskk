import LinePriceChart from '@/components/line-price-chart/LinePriceChart';
import styles from './id.module.scss';
import VolumeChart from '@/components/volume-chart/VolumeChart';
import IntervalChoose from '@/components/interval-choose/IntervalChoose';
import CandlesInput from '@/components/candles-input/CandlesInput';
import { CoinsService } from '@/service/coins.service';

async function CoinPage({ params }: { params: { id: string } }) {
  const ids = await CoinsService.getIds();
  const exchanges = await CoinsService.getExchanges();
  return (
    <div className={styles.page}>
      <IntervalChoose />
      <LinePriceChart id={params.id} />
      <CandlesInput ids={ids} exchanges={exchanges} />
      <VolumeChart id={params.id} />
    </div>
  );
}
export default CoinPage;
