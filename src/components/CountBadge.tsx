import { cn } from '@/utils/functions';

export const CountBadge = ({
  className,
  count,
}: {
  className: string;
  count: number;
}) => {
  return (
    <div
      className={cn(
        'absolute -right-1 -top-1 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-accent-secondary text-[8px]',
        className
      )}
    >
      {count}
    </div>
  );
};
