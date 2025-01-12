'use client';

import model from '@/assets/model.jpg';
import { Card } from '@/components';
import { cn } from '@/utils/functions';
import Image from 'next/image';
import { IoTrendingUpSharp } from 'react-icons/io5';

export const TrendingCard = ({}) => {
  return (
    <Card className="relative col-span-4 h-[232px] lg:col-span-1">
      <Image
        src={model}
        alt="model"
        className="absolute bottom-0 left-0 right-0 top-0 h-[232px] w-full rounded-lg object-cover object-top"
      />

      <div className="relative z-[2] flex w-fit flex-col gap-2 rounded-lg bg-white bg-opacity-10 p-2 backdrop-blur">
        <div className="text-sm font-semibold text-black">Trending Now</div>
        <div className="flex items-center gap-1 text-[10px]">
          <IoTrendingUpSharp className="text-primary-light" />
          <span className={cn('font-semibold text-primary-light')}>+{12}%</span>
          <span className="text-gray-900">vs yesterday</span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
        <div className="text-[10px] font-semibold text-black">
          Single Color Blazer
        </div>
        <div className="text-xs text-black">$499.99</div>
      </div>
    </Card>
  );
};
