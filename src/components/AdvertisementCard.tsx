import { cn } from '@/utils/functions';
import { Button } from 'antd';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { Card } from './Card';

export const AdvertisementCard = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <Card
      className={cn(
        'absolute bottom-4 left-4 right-4 flex h-40 flex-col justify-between overflow-hidden bg-[#378986]',
        {
          hidden: collapsed,
        }
      )}
    >
      <div className="relative z-[10] text-sm font-semibold capitalize text-white">
        Impove your sales efficiency
      </div>

      <Button
        type="primary"
        className="!relative !z-[10] !mt-4 !w-full !bg-yellow-500 !px-4 !py-1 !text-xs !font-semibold !text-black !shadow-md"
      >
        Go PRO!
      </Button>

      <FaArrowTrendUp
        className="absolute -left-8 bottom-16 translate-x-1/2 rotate-[-10deg] text-orange-500"
        style={{ scale: 9 }}
      />
    </Card>
  );
};
