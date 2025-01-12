'use client';

import { stats } from '@/utils/constants';
import {
  AnalyticsCard,
  SalesByCategoryCard,
  StatCard,
  TopSellingTable,
  TrendingCard,
} from './components';

const DashboardPage = () => {
  return (
    <main className="mt-4 grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}

      <AnalyticsCard />
      <SalesByCategoryCard />
      <TopSellingTable />
      <TrendingCard />
    </main>
  );
};

export default DashboardPage;
