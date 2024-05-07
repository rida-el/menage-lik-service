import { BadgeDollarSign, CalendarRange } from "lucide-react";
import Image from "next/image";
import {
  MdLightMode,
  MdOutlineCalendarMonth,
  MdOutlineCleaningServices,
} from "react-icons/md";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const Comment = () => {
  return (
    <div className="relative flex h-full min-h-[500px] w-screen flex-col items-center justify-between pb-12 ">
      <section
        id="about"
        className="flex h-full flex-col items-center justify-between"
      >
        <div className="container mx-auto flex h-full flex-col justify-between gap-12 md:py-20">
          <div className="flex h-fit w-full flex-col items-center justify-center gap-6 text-center">
            <div className="flex flex-col items-center justify-center gap-1">
              <h2 className="text-left text-3xl font-semibold text-primaryColor md:text-4xl">
                Comment ça fonctionne
              </h2>
              <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
            </div>
            <p className="max-w-xl">
              Nous nettoyons votre maison, bureau et tous vous espaces toutes
              les semaines, toutes les deux semaines ou toutes les trois
              semaines.
            </p>
          </div>
        </div>
      </section>
      <div className="container flex h-full items-center justify-center gap-10">
        {data.map((item, index) => (
          <Card className="relative w-[350px] text-center" key={index}>
            <CardHeader className="">
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="rounded-md shadow-[12px_12px_0px_0px_rgba(235,209,15)] ">
              <p>{item.description}</p>
              <p className="absolute top-0 text-[9rem] font-black opacity-5">
                {index + 1}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute top-0 -z-10 h-[80%] w-full bg-primaryColorLight"></div>
    </div>
  );
};

const data = [
  {
    title: "Demander des services",
    description:
      "Choisissez la prestation, la date et l’horaire, directement depuis notre site Web ou notre application mobile.",
  },
  {
    title: "Mise en relation",
    description:
      "Nous vous enverrons une confirmation dans la journée avec les coordonnées de la dame qui va venir à des prix fixes.",
  },
  {
    title: "Profiter",
    description:
      "Votre technicien exécute le travail selon vos instructions. Vous pouvez la payer directement à la fin de la séance.",
  },
];

export default Comment;
