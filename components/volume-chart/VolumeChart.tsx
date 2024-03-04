'use client';

import { AreaChart, getFilteredChartTooltipPayload } from '@mantine/charts';
import { FC } from 'react';
import { Paper, Text } from '@mantine/core';
import styles from '../line-price-chart/LinePriceChart.module.scss';
import { useVolumeHistory } from '@/hooks/useVolumeHistory';

interface ChartTooltipProps {
  label: string;
  payload: Record<string, any>[] | undefined;
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
  if (!payload) return null;

  return (
    <Paper px="md" py="sm" withBorder shadow="md" radius="md">
      <Text fw={500} mb={5} c="dark">
        {label}
      </Text>
      {getFilteredChartTooltipPayload(payload).map((item: any) => (
        <Text key={item.name} c="dark" fz="sm">
          Объём: ${Intl.NumberFormat('en-US', { minimumFractionDigits: 3 }).format(item.value)}
        </Text>
      ))}
    </Paper>
  );
}

const VolumeChart: FC<{ id: string }> = ({ id }) => {
  const data = useVolumeHistory(id);

  return (
    <article className={styles.body}>
      {data.error !== '' ? (
        <span className={styles.body__error}>{data.error}</span>
      ) : (
        <>
          <AreaChart
            className={`${styles.chart} ${data.isLoading ? styles.chart__loading : ''}`}
            h={300}
            data={data.history}
            dataKey="period"
            strokeWidth={1}
            type="stacked"
            tickLine="none"
            gridAxis="xy"
            unit=" $"
            withGradient
            areaChartProps={{ syncId: 'coin' }}
            tooltipProps={{
              content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
            }}
            dotProps={{ r: 0, strokeWidth: 1 }}
            series={[{ name: 'volume', color: 'green.6' }]}
            curveType="linear"
          />
          {data.isLoading ? <span className={styles.load}>Loading</span> : <></>}
        </>
      )}
    </article>
  );
};
export default VolumeChart;
