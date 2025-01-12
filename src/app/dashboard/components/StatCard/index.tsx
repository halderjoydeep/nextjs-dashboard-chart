import { Card } from '@/components';
import { cn } from '@/utils/functions';
import React from 'react';
import { IoTrendingDownSharp, IoTrendingUpSharp } from 'react-icons/io5';
import { StatGraph } from './StatGraph';

export interface StatCardProps {
  title: string;
  icon: React.ReactElement;
  revenue: number;
  direction: 'up' | 'down';
  percentage: number;
  data: any[];
}

export const StatCard = ({
  icon,
  title,
  revenue,
  direction,
  percentage,
  data,
}: StatCardProps) => {
  return (
    <Card className="col-span-4 sm:col-span-2 lg:col-span-1">
      {/* Title */}
      <div className="flex items-center gap-2 text-xs">
        <div className="flex h-4 w-4 items-center justify-center rounded bg-blue-400 p-1">
          {React.cloneElement(icon, {
            className: 'text-white',
          })}
        </div>

        <div className="uppercase text-gray-500">{title}</div>
      </div>

      <div className="grid h-12 grid-cols-2 items-center gap-1">
        <div className="my-2 text-2xl font-semibold">${revenue}</div>
        <StatGraph data={data} />
      </div>

      <div className="flex items-center gap-1 text-[10px]">
        {direction === 'up' ? (
          <IoTrendingUpSharp className="text-primary-light" />
        ) : (
          <IoTrendingDownSharp className="text-destructive" />
        )}
        <span
          className={cn('font-semibold text-primary-light', {
            'text-destructive': direction === 'down',
          })}
        >
          {direction === 'up' ? '+' : '-'}
          {percentage}%
        </span>
        <span className="text-gray-500">vs yesterday</span>
      </div>
    </Card>
  );
};
