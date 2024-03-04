import { FC } from 'react';
import { IStoreCurrentCoin } from '@/types/coin';
import styles from '../CoinInfo.module.scss';

const DetailedCoinInfo: FC<{ coin: IStoreCurrentCoin }> = ({ coin }) => {
  const changePercent24Hr = Number(coin.coin.changePercent24Hr);
  const volumeUsd24Hr = Number(coin.coin.volumeUsd24Hr);
  const marketCapUsd = Number(coin.coin.marketCapUsd);
  const supply = Number(coin.coin.supply);
  const maxSupply = Number(coin.coin.maxSupply);
  return (
    <section data-testid="detailed" className={styles.detailedInfo}>
      <div>
        <span>Изменение за 24ч</span>
        <span style={changePercent24Hr < 0 ? { color: 'red' } : { color: 'green' }}>
          {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(changePercent24Hr)} %
        </span>
      </div>
      <div>
        <span>Объём за 24ч</span>
        <span style={volumeUsd24Hr < 0 ? { color: 'red' } : { color: 'green' }}>
          $ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(volumeUsd24Hr)}
        </span>
      </div>
      <div>
        <span>Капиталицация</span>
        <span>$ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(marketCapUsd)}</span>
      </div>
      <div>
        <span>Предложение</span>
        <span>$ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(supply)}</span>
      </div>
      <div>
        <span>Макс. предложение</span>
        <span>$ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(maxSupply)}</span>
      </div>
    </section>
  );
};
export default DetailedCoinInfo;
