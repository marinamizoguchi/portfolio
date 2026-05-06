// filepath: app/components/Avatar.tsx
import Image from "next/image";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-32 h-32 text-4xl",
};

export function Avatar({
  src,
  alt = "Avatar",
  size = "md",
  fallback = "👤",
}: AvatarProps) {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden flex items-center justify-center`}
    >
      {src ? (
        <Image
          width={500}
          height={500}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}
