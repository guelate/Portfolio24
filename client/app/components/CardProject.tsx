/* eslint-disable @typescript-eslint/no-explicit-any */
import NotificationBadge from "./NotificationBadge";
interface cardProjectProps {
  title: string;
  status: string;
  children: string;
  icon:any;
}
export default function CardProject({
  status,
  children,
  title,
  icon,
}: cardProjectProps) {
  return (
    <div className="border rounded-xl bg-[#0a101f] border-zinc-700 hover:border-zinc-800 hover:shadow-lg">
   
        <div className="flex flex-col gap-4 p-4 ">
          <div className="flex justify-between items-center py-1">
            <div className="flex gap-4 items-center">
            <h1 className="text-white md:text-3xl font-secondary tracking-widest ">{title}</h1>
            {icon}
            </div>
            <NotificationBadge>{status}</NotificationBadge>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[#94a3b8] font-secondary tracking-widest md:text-lg text-base leading-loose">{children}</p>
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block font-secondary cursor-not-allowed">
              Read more <span aria-hidden="true" className="pl-2 items-center justify-center text-base cursor-not-allowed">&rarr;</span>
            </p>
          </div>
        </div>
    
    </div>
  );
}
