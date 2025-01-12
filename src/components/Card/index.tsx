import { cn } from '@/utils/functions';

export const Card = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('rounded-2xl bg-white p-4', className)} {...props}>
      {children}
    </div>
  );
};
