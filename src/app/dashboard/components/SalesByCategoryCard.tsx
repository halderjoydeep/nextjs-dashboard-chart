'use client';

import { ChartConfig, ChartContainer } from '@/components';
import { DUMMY_SALES_BY_CATEGORY_DATA } from '@/utils/constants';
import React from 'react';
import { Label, Pie, PieChart } from 'recharts';
import { DataCard } from './DataCard';
import { Legend } from './Legend';

const chartConfig = {
  sales: {
    label: 'Visitors',
  },
  lingerie: {
    label: 'lingerie',
  },
  accessories: {
    label: 'accessories',
  },
  clothing: {
    label: 'clothing',
  },
  bodyFit: {
    label: 'bodyFit',
  },
  sportswear: {
    label: 'sportswear',
  },
} satisfies ChartConfig;

export function SalesByCategoryCard() {
  const totalSales = React.useMemo(() => {
    return DUMMY_SALES_BY_CATEGORY_DATA.reduce(
      (acc, curr) => acc + curr.sales,
      0
    );
  }, []);

  return (
    <DataCard title="Sales by Category">
      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2">
        <ChartContainer
          config={chartConfig}
          className="-ml-0 h-full sm:-ml-20 md:-ml-10"
        >
          <PieChart>
            <Pie
              data={DUMMY_SALES_BY_CATEGORY_DATA}
              dataKey="sales"
              nameKey="category"
              innerRadius={50}
              outerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          ${(totalSales / 1000).toFixed(1)}k
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

        <div className="flex h-full flex-col gap-3">
          {DUMMY_SALES_BY_CATEGORY_DATA.map((item) => (
            <Legend key={item.category} {...item} />
          ))}
        </div>
      </div>
    </DataCard>
  );
}
