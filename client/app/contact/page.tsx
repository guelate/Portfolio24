// /* eslint-disable react/jsx-key */
// "use client";
// import { Github, Mail, Linkedin } from "lucide-react";
// import Link from "next/link";
// import { Navigation } from "../components/nav";
// import { Card } from "../components/card";
// import MailCard from "../components/MailCard";
// import { useState } from "react";
// import FormSign from "../components/FormSign";

// const socials = [
//   {
//     icon: <Linkedin size={20} />,
//     href: "https://www.linkedin.com/in/killian-seyo/",
//     label: "Linkedin",
//     handle: "@Killian SEYO",
//   },
//   {
//     icon: <Mail size={20} />,
//     href: "#", // Pas besoin d'une URL car nous ouvrons le formulaire
//     label: "Email",
//     handle: "guelateseyo@gmail.com",
//   },
//   {
//     icon: <Github size={20} />,
//     href: "https://github.com/guelate",
//     label: "Github",
//     handle: "Guelate",
//   },
// ];

// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openDialog = () => {
//     setIsOpen(true);
//   };

//   const closeDialog = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="bg-[#030712]">
//       <Navigation />
//       <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
//         <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
//           {socials.map((s) =>
//             s.label === "Email" ? (
//               <Card key={s.href}>
//                 <MailCard
//                   icon={s.icon}
//                   handle={s.handle}
//                   label={s.label}
//                   onclick={openDialog} // Appel de la fonction openDialog lorsque l'utilisateur clique sur la carte
//                 />

//                 {isOpen && (
//                   <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
//                     <div className="flex bg-white rounded-lg shadow-lg w-2/4 justify-center z-10">
//                       <FormSign
//                         openDialog={openDialog}
//                         closeDialog={closeDialog}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </Card>
//             ) : (
//               <Card key={s.href}>
//                 <Link
//                   href={s.href}
//                   target="_blank"
//                   className={
//                     isOpen
//                       ? "bg-transparent"
//                       : "p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 bg-[#0a101f]"
//                   }
//                 >
//                   <span
//                     className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
//                     aria-hidden="true"
//                   />
//                   <span
//                     className={
//                       isOpen
//                         ? "bg-transparent"
//                         : "relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
//                     }
//                   >
//                     {s.icon}
//                   </span>
//                   <div className="z-10 flex flex-col items-center">
//                     <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
//                       {s.handle}
//                     </span>
//                     <span
//                       className={
//                         isOpen
//                           ? "bg-transparent"
//                           : "mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200"
//                       }
//                     >
//                       {s.label}
//                     </span>
//                   </div>
//                 </Link>
//               </Card>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/jsx-key */
"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import MailCard from "../components/MailCard";
import { useState } from "react";
import FormSign from "../components/FormSign";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/killian-seyo/",
    label: "Linkedin",
    handle: "@Killian SEYO",
  },
  {
    icon: <Mail size={20} />,
    href: "#", // Pas besoin d'une URL car nous ouvrons le formulaire
    label: "Email",
    handle: "guelateseyo@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/guelate",
    label: "Github",
    handle: "Guelate",
  },
];

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Bloquer le scroll quand la modale est ouverte
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Réactiver le scroll quand la modale est fermée
  };

  return (
    <div className="bg-[#030712]">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) =>
            s.label === "Email" ? (
              <Card key={s.href}>
                <MailCard
                  icon={s.icon}
                  handle={s.handle}
                  label={s.label}
                  onclick={openDialog} // Appel de la fonction openDialog lorsque l'utilisateur clique sur la carte
                />

                {isOpen && (
                  <>
                    {/* Arrière-plan semi-transparent */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
                    
                    {/* Contenu de la modale */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                      <div className="bg-white rounded-lg shadow-lg w-4/5 md:w-2/5 p-5 cursor-not-allowed">
                        <FormSign
                          openDialog={openDialog}
                          closeDialog={closeDialog}
                        />
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ) : (
              <Card key={s.href}>
                <Link
                  href={s.href}
                  target="_blank"
                  className={
                    isOpen
                      ? "bg-transparent"
                      : "p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 bg-[#0a101f]"
                  }
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span
                    className={
                      isOpen
                        ? "bg-transparent"
                        : "relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange"
                    }
                  >
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span
                      className={
                        isOpen
                          ? "bg-transparent"
                          : "mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200"
                      }
                    >
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}
