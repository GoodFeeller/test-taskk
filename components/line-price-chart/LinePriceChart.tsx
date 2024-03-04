'use client';

import { Paper, Text } from '@mantine/core';
import { FC } from 'react';
import { AreaChart, getFilteredChartTooltipPayload } from '@mantine/charts';
import { usePriceHistory } from '@/hooks/usePriceHistory';
import styles from './LinePriceChart.module.scss';

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
          Цена: ${Intl.NumberFormat('en-US', { minimumFractionDigits: 3 }).format(item.value)}
        </Text>
      ))}
    </Paper>
  );
}

const LinePriceChart: FC<{ id: string }> = ({ id }) => {
  const { data, isLoading, error } = usePriceHistory(id);
  return (
    <article className={styles.body}>
      {error !== '' ? (
        <span className={styles.body__error}>{error}</span>
      ) : (
        <>
          <AreaChart
            className={`${styles.chart} ${isLoading ? styles.chart__loading : ''}`}
            h={300}
            data={data}
            dataKey="date"
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
            series={[{ name: 'priceUsd', color: 'green.6' }]}
            curveType="linear"
          />
          {isLoading ? <span className={styles.load}>Loading</span> : <></>}
        </>
      )}
    </article>
  );
};
export default LinePriceChart;
