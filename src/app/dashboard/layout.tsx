'use client';

import { Header, Sidebar } from '@/components';
import { cn } from '@/utils/functions';
import { useEffect, useState } from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-secondary p-4">
      <Sidebar collapsed={collapsed} />
      <div
        className={cn('mt-4 bg-secondary', {
          'ml-[216px]': !collapsed,
          'ml-24': collapsed,
        })}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        {children}
      </div>
    </div>
  );
}
