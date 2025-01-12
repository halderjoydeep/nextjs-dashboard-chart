'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components';
import { DUMMY_SALES_ANALYTICS } from '@/utils/constants';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { DataCard } from './DataCard';

const chartConfig: ChartConfig = {
  revenue: {
    label: 'revenue',
  },
};

export const AnalyticsCard = () => {
  return (
    <DataCard title="Sales Analytics">
      <ChartContainer config={chartConfig} className="mt-4 h-40 w-full">
        <AreaChart
          accessibilityLayer
          data={DUMMY_SALES_ANALYTICS}
          className="-ml-8"
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `Mar ${value}`}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `${Math.round(value / 1000)}K`}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent
                hideLabel
                hideIndicator
                className="bg-accent-secondary"
              />
            }
          />
          <Area
            dataKey="revenue"
            type="natural"
            fill="var(--accent-secondary)"
            fillOpacity={0.1}
            stroke="var(--accent-secondary)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </DataCard>
  );
};
