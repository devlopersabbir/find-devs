import { cn } from "@/lib/utils";

export const LoadingSpinner = ({
  width,
  height,
  classes,
}: {
  width?: string;
  height?: string;
  classes?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width ?? "24"}`}
      height={`${height ?? "24"}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(classes, "animate-spin")}
      
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
