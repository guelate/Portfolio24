interface MailCardProps {
    onclick: () => void;
    icon: React.ReactNode;  
    handle: string;         
    label: string;         
  }

export default function MailCard({ icon, handle, label,onclick }:MailCardProps) {
    return (
      <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 bg-[#0a101f] cursor-pointer"  onClick={onclick}>
        <span
          className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
          aria-hidden="true"
        />
        <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
          {icon}
        </span>
        <div className="z-10 flex flex-col items-center">
          <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
            {handle}
          </span>
          <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-white">
            {label}
          </span>
        </div>
      </div>
    );
  }
  