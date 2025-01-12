import { AdvertisementCard, Menu } from '@/components';
import { cn } from '@/utils/functions';
import { BsBag, BsChatLeftQuote, BsGear, BsGrid1X2Fill } from 'react-icons/bs';
import { CiViewList } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { LuBadgePercent } from 'react-icons/lu';
import { MdOutlineLogout } from 'react-icons/md';

interface indexProps {
  collapsed: boolean;
}

const itemsGroup1 = [
  {
    label: 'Dashboard',
    icon: <BsGrid1X2Fill />,
    count: 2,
    href: '/dashboard',
  },
  {
    label: 'Products',
    icon: <CiViewList />,
    href: '/dashboard/products',
  },
  {
    label: 'Orders',
    icon: <BsBag />,
    href: '/dashboard/orders',
  },
  {
    label: 'Sales',
    icon: <LuBadgePercent />,
    href: '/dashboard/sales',
  },
  {
    label: 'Reviews',
    icon: <BsChatLeftQuote />,
    href: '/dashboard/reviews',
  },
];

const itemsGroup2 = [
  {
    label: 'Profile',
    icon: <FaRegUser />,
    href: '/dashboard/profile',
  },
  {
    label: 'Settings',
    icon: <BsGear />,
    href: '/dashboard/settings',
  },
  {
    label: 'Logout',
    icon: <MdOutlineLogout />,
  },
];

const Divider = () => (
  <div className="p-4">
    <div className="h-[1px] w-full bg-white/10"></div>
  </div>
);

export const Sidebar = ({ collapsed }: indexProps) => {
  return (
    <aside
      className={cn(
        'fixed bottom-0 left-0 top-0 z-10 m-4 w-[200px] overflow-hidden rounded-2xl bg-primary pb-4 pt-3 transition-all',
        {
          'w-[72px]': collapsed,
        }
      )}
    >
      {/* Logo */}
      <div
        className={cn('px-4 text-2xl font-semibold text-white', {
          'flex items-center justify-center': collapsed,
        })}
      >
        UU
      </div>

      <Menu title="Menu" items={itemsGroup1} collapsed={collapsed} />

      <Divider />

      <Menu title="Other" items={itemsGroup2} collapsed={collapsed} />

      <AdvertisementCard collapsed={collapsed} />
    </aside>
  );
};
