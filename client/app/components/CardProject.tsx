import { Card } from "./card";
import NotificationBadge from "./NotificationBadge";

interface cardProjectProps {
    title:string;
    status:string;
    children: string;
  }
export default function CardProject({status,children,title}:cardProjectProps){
    return(
        <Card>
              <div className="flex flex-col gap-4 p-4">
                <div className="flex border border-red-700 justify-between items-center py-1">
                  <h1 className="text-white md:text-3xl">{title}</h1>
                  <NotificationBadge>{status}</NotificationBadge>
                </div>
                <div className="flex flex-col border border-red-300">

                <p className="text-white tracking-normal leading-6">
                 {children}
                </p>
                <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
                </div>
              </div>
            </Card>
    )
}
