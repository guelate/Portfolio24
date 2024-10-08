import { FaInstagram } from "react-icons/fa6";
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
    <div className="border rounded-xl bg-[#0a101f] p-4 border-zinc-700 hover:border-zinc-800 hover:shadow-lg">
      <div className="flex flex-col ">
        <div className="flex justify-between items-center py-1">
          <div className="flex gap-4 items-center">
            <h1 className="text-white md:text-3xl font-secondary tracking-widest hover:shadow-lg">
              {title}
            </h1>
        
            <FaInstagram style={{color:"white",fontSize: "2em"}}/>
      
          </div>
          <NotificationBadge>{status}</NotificationBadge>
        </div>

        <div className="flex flex-col h-80 pt-9">
          <div className="flex flex-col gap-48">
            <p
              className="text-[#94a3b8] font-secondary  tracking-widest md:text-lg text-base"
              style={{ lineHeight: "2" }}
            >
              {children}
            </p>

            <p className="hidden text-zinc-200  hover:text-zinc-50 lg:block font-secondary cursor-not-allowed">
              Read more{" "}
              <span
                aria-hidden="true"
                className="pl-2 items-center justify-center cursor-not-allowed"
              >
                &rarr;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
