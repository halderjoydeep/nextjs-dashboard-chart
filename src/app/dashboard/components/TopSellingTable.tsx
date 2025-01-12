import bag from '@/assets/bag.jpg';
import { Card } from '@/components';
import { DUMMY_SALES } from '@/utils/constants';
import { cn } from '@/utils/functions';
import { Select, Table, TableColumnsType } from 'antd';
import Image from 'next/image';
import './style.css';

export interface DataType {
  key: React.Key;
  productName: string;
  productId: number;
  price: number;
  status: 'in stock' | 'low stock' | 'out of stock';
  sell: number;
  totalEarned: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    render: (_, record) => (
      <div className="flex items-center gap-2">
        {/* Image */}
        <Image
          src={bag}
          alt="bag"
          width={30}
          height={30}
          className="hidden rounded-lg sm:block"
        />
        <div className="flex flex-col">
          <div className="text-xs font-semibold">{record.productName}</div>
          <div className="text-[10px] text-gray-500">
            <span className="hidden sm:inline">Product</span> ID:{' '}
            {record.productId}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (_, record) => (
      <div className="text-xs font-semibold">${record.price}</div>
    ),
    sorter: {
      compare: (a, b) => a.price - b.price,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_, record) => (
      <div
        className={cn(
          'w-fit rounded-md border px-2 py-0.5 text-xs font-semibold capitalize',
          {
            'border-primary-light bg-[#2ed0bf10] text-primary-light':
              record.status === 'in stock',
            'border-yellow-500 bg-yellow-500/10 text-yellow-500':
              record.status === 'low stock',
            'border-red-500 bg-red-500/10 text-red-500':
              record.status === 'out of stock',
          }
        )}
      >
        {record.status}
      </div>
    ),
  },
  {
    title: 'Sold',
    dataIndex: 'sell',
    render: (_, record) => (
      <div className="text-xs font-semibold">${record.sell} pcs</div>
    ),
    sorter: {
      compare: (a, b) => a.sell - b.sell,
    },
  },
  {
    title: 'Total Earned',
    dataIndex: 'totalEarned',
    render: (_, record) => (
      <div className="text-xs font-semibold">
        ${record.totalEarned.toLocaleString()}
      </div>
    ),
    sorter: {
      compare: (a, b) => a.totalEarned - b.totalEarned,
    },
  },
];

export const TopSellingTable = () => {
  return (
    <Card className="col-span-4 flex h-full flex-col gap-2 lg:col-span-3">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">Top Selling</h2>
        <Select
          defaultValue={'Sort by'}
          options={[
            { value: 'Asc', label: <span>Asc</span> },
            { value: 'Desc', label: <span>Desc</span> },
          ]}
        />
      </div>
      <Table<DataType>
        columns={columns}
        dataSource={DUMMY_SALES}
        className="h-40"
        pagination={false}
        rootClassName="overflow-y-scroll top-selling-table rounded-2xl"
      />
    </Card>
  );
};
