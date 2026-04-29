// filepath: app/components/ProgressBar.tsx
interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  label?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = true,
  label,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex justify-between mb-2">
        {label && <span className="font-medium">{label}</span>}
        {showLabel && (
          <span className="text-zinc-500">{Math.round(percentage)}%</span>
        )}
      </div>
      <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
