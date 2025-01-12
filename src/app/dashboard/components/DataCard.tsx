import { Card } from '@/components';
import { Select } from 'antd';

interface DataCardProps {
  title: string;
  children: React.ReactNode;
}

export const DataCard = ({ title, children }: DataCardProps) => {
  return (
    <Card className="col-span-4 flex h-full flex-col gap-2 xl:col-span-2">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Select
          defaultValue={'Week'}
          options={[
            { value: 'Week', label: <span>Week</span> },
            { value: 'day', label: <span>day</span> },
            { value: 'Year', label: <span>Year</span> },
          ]}
        />
      </div>

      {children}
    </Card>
  );
};
