'use client';

import profilePic from '@/assets/profile-pic.jpg';
import { cn } from '@/utils/functions';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BsBell, BsSearch, BsSun } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { GrCart } from 'react-icons/gr';
import { CountBadge } from './CountBadge';

interface indexProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ collapsed, setCollapsed }: indexProps) => {
  const pathname = usePathname();

  const pageName = useMemo(
    () => pathname.split('/').pop()?.split('-').join(' '),
    [pathname]
  );

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <header className="flex items-center justify-between lg:pr-12">
      {/* Left */}
      <div className="flex items-center justify-between gap-2">
        <BiMenuAltLeft
          className={cn('hidden h-6 w-6 cursor-pointer text-primary', {
            'md:block': !collapsed,
            hidden: collapsed,
          })}
          onClick={toggleCollapsed}
          role="button"
        />
        <GoArrowRight
          className={cn('hidden h-6 w-6 cursor-pointer text-primary', {
            'md:block': collapsed,
            hidden: !collapsed,
          })}
          onClick={toggleCollapsed}
          role="button"
        />
        <h1 className="text-lg font-semibold capitalize">{pageName}</h1>
      </div>

      {/* Right */}
      <nav className="flex items-center gap-2 text-primary sm:gap-5">
        <BsSearch className="cursor-pointer" />
        <div className="relative">
          <BsBell className="cursor-pointer" />
          <CountBadge count={1} className="bg-red-500 text-white" />
        </div>
        <BsSun className="cursor-pointer" />
        <div className="relative">
          <GrCart className="cursor-pointer" />
          <CountBadge count={5} className="bg-cyan-500 text-white" />
        </div>

        <div className="h-8 w-[1px] bg-gray-400/10" />

        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-500">
            <Image
              src={profilePic}
              alt="profile-pic"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-semibold text-gray-800">
              Joydeep H.
            </div>
            <div className="text-[10px] text-gray-500">Admin</div>
          </div>
        </div>
      </nav>
    </header>
  );
};
