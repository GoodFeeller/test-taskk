import { FC } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ICoin } from '@/types/coin';
import styles from '../../CoinTable.module.scss';

const CoinItem: FC<{ coin: ICoin }> = ({ coin }) => {
  const price = Number(coin.priceUsd);
  const changePercent24Hr = Number(coin.changePercent24Hr);
  const router = useRouter();

  return (
    <tr onClick={() => router.push(`/${coin.id}`)}>
      <td>
        <Image
          className={styles.tableBody__image}
          src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          height={30}
          width={30}
          alt=""
        />
        {coin.name}
      </td>
      <td>
        ${' '}
        {price > 0.001
          ? Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(price)
          : price}
      </td>
      <td style={changePercent24Hr < 0 ? { color: 'red' } : { color: 'green' }}>
        {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(changePercent24Hr)} %
      </td>
      <td>
        $ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(Number(coin.volumeUsd24Hr))}
      </td>
      <td>
        $ {Intl.NumberFormat('en', { maximumFractionDigits: 3 }).format(Number(coin.marketCapUsd))}
      </td>
    </tr>
  );
};
export default CoinItem;
