import { Badge } from "@/components/ui/badge";

// type status = "wip" | "online";

interface notificationBadgeProps {
  children: string;
  // status: status;
}

export default function notificationBadge({
  children
}: notificationBadgeProps) {
  return (
    <Badge className="inline-flex items-center justify-center rounded-full bg-white px-1.5  py-0.5 h-5 text-white animate-blink">
      <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current"></span>
      <span className="text-xs font-medium text-[#0a101f]">{children}</span>
    </Badge>
  );
}


