import { MenuItem } from './MenuItem';

interface MenuProps {
  title: string;
  items: {
    label: string;
    icon: React.ReactElement;
    count?: number;
    href?: string;
  }[];
  collapsed: boolean;
}

export const Menu = ({ title, items, collapsed }: MenuProps) => {
  return (
    <>
      <div className="mb-3 mt-5 px-4 text-[10px] font-thin uppercase text-white">
        {title}
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} collapsed={collapsed} />
        ))}
      </div>
    </>
  );
};
