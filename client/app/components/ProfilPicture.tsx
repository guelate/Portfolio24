import { Avatar } from "@/components/ui/avatar"
import Image from 'next/image'
import profil from "../../public/profil.png"

export default function ProfilPicture() {
  return (
    <div className="flex">
      <Avatar className="h-24 w-24 ">
        <Image
          src={profil}
          alt="Profil picture"
          className="rounded-full w-full h-full border border-gray-4y00"
        />
      </Avatar>
    </div>
  )
}
