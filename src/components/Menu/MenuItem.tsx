'use client';
import { CountBadge } from '@/components';
import { cn } from '@/utils/functions';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuItemProps {
  icon: React.ReactElement;
  label: string;
  collapsed: boolean;
  count?: number;
  href?: string;
}

export const MenuItem = ({
  collapsed,
  icon,
  label,
  count,
  href,
}: MenuItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href || '/'}
      className={cn(
        'flex h-8 items-center justify-between gap-2 border-l-4 border-transparent px-3 py-1 pr-4 text-white transition-all hover:bg-black/10',
        {
          'justify-center': collapsed,
          'border-accent-primary': active,
        }
      )}
    >
      {/* Collapsed */}
      <div className="relative">
        {React.cloneElement(icon, {
          className: cn('-ml-1 transition-all h-4 w-4 text-white/70', {
            hidden: !collapsed,
            'text-white': active,
          }),
        })}

        {count && (
          <CountBadge className={cn({ hidden: !collapsed })} count={count} />
        )}
      </div>

      {/* Expanded */}
      <div
        className={cn('flex w-full items-center gap-2 transition-all', {
          hidden: collapsed,
        })}
      >
        {React.cloneElement(icon, {
          className: cn('h-4 w-4 text-white/70', {
            'text-white': active,
          }),
        })}
        <div
          className={cn(
            'text-xs font-extralight tracking-wide transition-all',
            {
              'font-medium': active,
            }
          )}
        >
          {label}
        </div>
        {count && (
          <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-accent-secondary text-xs transition-all">
            {count}
          </div>
        )}
      </div>
    </Link>
  );
};
