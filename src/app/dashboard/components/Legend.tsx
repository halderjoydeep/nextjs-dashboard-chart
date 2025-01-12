interface LegendProps {
  label: string;
  percentage: number;
  products: number;
  sales: number;
  fill: string;
}

export const Legend = ({
  label,
  percentage,
  products,
  sales,
  fill,
}: LegendProps) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex items-start gap-2">
        <div
          className="mt-1 h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: fill }}
        />
        <div className="flex flex-col">
          <div className="text-xs font-semibold text-gray-900">
            {label} ({percentage}%)
          </div>
          <p className="text-[10px] uppercase text-gray-500">
            {products.toLocaleString()} category products
          </p>
        </div>
      </div>

      <div className="text-xs font-semibold text-gray-900">
        ${sales.toLocaleString()}
      </div>
    </div>
  );
};
