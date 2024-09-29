import { Card } from "@/components/ui/card";
import NotificationBadge from "./NotificationBadge";

interface cardProjectProps {
  title: string;
  status: string;
  children: string;
}

export default function CardProject1({
  status,
  title,
  children,
}: cardProjectProps) {
  return (
    // <Card>
    <div className="border rounded-xl bg-[#0a101f] p-4 border-zinc-700 hover:border-zinc-800 hover:shadow-lg">

      <div className="flex flex-col ">
        <div className="flex justify-between items-center py-1">
          <h1 className="text-white md:text-3xl font-secondary tracking-widest hover:shadow-lg">{title}</h1>
          <NotificationBadge>{status}</NotificationBadge>
        </div>

        <div className="flex flex-col h-80 pt-9">
          <div className="flex flex-col gap-60">
            <p className="text-[#94a3b8] font-secondary  tracking-widest md:text-lg text-base" style={{lineHeight: '2'}}>
              {children}
            </p>
           
            <p className="hidden text-zinc-200  hover:text-zinc-50 lg:block font-secondary ">
              Read more  <span aria-hidden="true" className="pl-2 items-center justify-center"> &rarr;</span>
            </p>

     
          </div>
        </div>
      </div>

    </div>
    // </Card>
  );
}

{/* <div className="flex flex-col p-4 pt-6 bg-[#0a101f]"> */}
{/* <div className="flex flex-col h-80 pt-10 mt-3"> */}
{/* <div className="flex flex-col h-80 pt-10 mt-3"> */}

// -font-secondary: "__Source_Code_Pro_ceb1b8", "__Source_Code_Pro_Fallback_ceb1b8";
// line-height: 1.5;
// size-xs: 0.75rem;
