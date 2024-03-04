import { ICoin, ICoinID } from '@/types/coin';
import { IExchange } from '@/types/exchanges';
import { IPriceHistory } from '@/types/priceHistory';
import { IVolumeHistory } from '@/types/volumeHistory';
import next from 'next';

const baseUrl = 'https://api.coincap.io';

export const CoinsService = {
  getAssets: async (): Promise<ICoin[]> => {
    const res = await fetch(baseUrl + '/v2/assets', { next: { revalidate: 60 } });
    const data = await res.json();
    return data.data;
  },
  getCurrentCoin: async (id: string): Promise<ICoin> => {
    const res = await fetch(`${baseUrl}/v2/assets/${id}`, { next: { revalidate: 60 } });
    const data = await res.json();
    return data.data;
  },
  getPriceHistory: async (id: string, interval: string): Promise<IPriceHistory[]> => {
    const res = await fetch(`${baseUrl}/v2/assets/${id}/history?interval=${interval}`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.data;
  },
  getVolumeHistory: async (
    id: string,
    interval: string,
    exchange: string,
    quoteId: string
  ): Promise<IVolumeHistory[]> => {
    const res = await fetch(
      `${baseUrl}/v2/candles?exchange=${exchange}&baseId=${id}/history?interval=${interval}?quoteId=${quoteId}`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();
    return data.data;
  },
  getIds: async (): Promise<ICoinID[]> => {
    try {
      const res = await fetch(baseUrl + '/v2/assets', { next: { revalidate: 60 } });
      const data = await res.json();
      return data.data;
    } catch (error) {
      return [];
    }
  },
  getExchanges: async (): Promise<IExchange[]> => {
    try {
      const res = await fetch(baseUrl + '/v2/exchanges', { next: { revalidate: 60 } });
      const data = await res.json();
      return data.data;
    } catch (error) {
      return [];
    }
  },
};
