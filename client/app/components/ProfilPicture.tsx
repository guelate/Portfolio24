import { Avatar } from "@/components/ui/avatar"
import Image from 'next/image'
import portrait2 from "../../public/portrait2.jpg"

export default function ProfilPicture() {
  return (
    <div className="flex">
      <Avatar className="h-24 w-24">
        <Image
          src={portrait2}
          alt="Profil picture"
          className="rounded-full w-full h-full border border-white"
        />
      </Avatar>
    </div>
  )
}
