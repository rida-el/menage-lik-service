import { BadgeDollarSign, CalendarRange } from "lucide-react";
import Image from "next/image";
import {
  MdLightMode,
  MdOutlineCalendarMonth,
  MdOutlineCleaningServices,
} from "react-icons/md";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { Button } from "~/components/ui/button";

const Comment = () => {
  return (
    <div className="relative h-full w-screen">
      <section
        id="about"
        className="flex h-full flex-col items-center justify-center"
      >
        <div className="container mx-auto flex h-full flex-col justify-between gap-12 md:py-20">
          <div className="flex h-fit w-full flex-col items-center justify-center text-center">
            <h2 className="text-left text-3xl font-semibold text-primaryColor md:text-4xl">
              Comment ça fonctionne
            </h2>
            <p className="max-w-xl">
              Nous nettoyons votre maison, bureau et tous vous espaces toutes
              les semaines, toutes les deux semaines ou toutes les trois
              semaines.
            </p>
          </div>
          <div className="mt-24 flex h-fit flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/numbers/1.png"
                alt="restaurant"
                width={250}
                height={190}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h2 className="flex items-center gap-2 font-semibold text-primaryColor">
                  <MdOutlineCleaningServices size={20} /> Demander des services
                </h2>
                <p className="text-gray-400">
                  Choisissez la prestation, la date et l’horaire, directement
                  depuis notre site Web ou container nos directement.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/assets/numbers/2.png"
                alt="restaurant"
                width={330}
                height={190}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h2 className="flex items-center gap-2 font-semibold text-primaryColor">
                  <MdOutlineCalendarMonth />
                  Mise en relation
                </h2>
                <p className="text-gray-400">
                  Nous vous enverrons une confirmation dans la journée avec les
                  coordonnées de la dame qui va venir à des prix fixes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/numbers/3.png"
                alt="restaurant"
                width={330}
                height={190}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h2 className="flex items-center gap-2 font-semibold text-primaryColor">
                  <MdLightMode />
                  Profiter
                </h2>
                <p className="text-gray-400">
                  Votre technicien exécute le travail selon vos instructions.
                  Vous pouvez la payer directement à la fin de la séance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full grow"></div>
      </section>
      <div className="absolute top-0 -z-10 h-[80%] w-full bg-primaryColorLight"></div>
    </div>
  );
};

export default Comment;
