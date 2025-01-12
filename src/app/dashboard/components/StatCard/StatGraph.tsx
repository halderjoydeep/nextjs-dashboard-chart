'use client';

import { Area, AreaChart } from 'recharts';

import { ChartConfig, ChartContainer } from '@/components';

const chartConfig: ChartConfig = {
  revenue: {
    label: 'Revenue',
  },
};

interface StatGraphProps {
  data: any[];
}

export const StatGraph = ({ data }: StatGraphProps) => {
  const direction =
    data[data.length - 1].revenue > data[data.length - 2].revenue
      ? 'up'
      : 'down';

  return (
    <ChartContainer config={chartConfig} className="h-12 w-full">
      <AreaChart accessibilityLayer data={data}>
        <Area
          dataKey="revenue"
          type="natural"
          fill={
            direction === 'up' ? 'var(--primary-light)' : 'var(--destructive)'
          }
          fillOpacity={0.1}
          stroke={
            direction === 'up' ? 'var(--primary-light)' : 'var(--destructive)'
          }
        />
      </AreaChart>
    </ChartContainer>
  );
};
