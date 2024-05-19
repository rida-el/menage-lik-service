import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const CarouselSection = () => {
  return (
    <section className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-16">
        <h2 className="text-left text-3xl font-semibold text-primaryColor md:text-4xl">
          Nos services
        </h2>
        <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
        <p className="w-full text-center md:max-w-[70%]">
          Tout bâtiment. Toute industrie. À toute heure. Un environnement propre
          et sain est essentiel pour toutes les entreprises et installations,
          quel que soit le secteur. Maintenant plus que jamais, des méthodes de
          désinfection détaillées doivent être en place pour protéger les
          clients et les employés de votre établissement. Les professionnels de
          Menage-lik services ont l&apos;expérience et les compétences requises
          pour obtenir des résultats irréprochables.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" mx-auto w-[90%] gap-2"
      >
        <CarouselContent className="flex ">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className=" border-2 border-secondaryColor !p-0 md:basis-1/2 lg:basis-1/3 "
            >
              <div className="group flex w-full items-center justify-center gap-2">
                <div className="absolute z-40 flex h-full w-full items-center justify-center text-white  ">
                  <h2 className="max-w-80 text-center text-xl font-extrabold">
                    {item.title}
                  </h2>
                </div>
                <div className="relative h-80 w-full object-fill p-2">
                  <Image
                    src={item.image}
                    alt="restaurant"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-0 top-0 z-20 h-full w-full bg-[#1929487a]"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <></>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </section>
  );
};

const data = [
  {
    title: "SERVICES DE NETTOYAGE HÔTELIER",
    image: "/assets/services/1.jpg",
  },
  {
    title: "SERVICES DE NETTOYAGE INDUSTRIEL",
    image: "/assets/services/2.jpeg",
  },
  {
    title: "SERVICES DE NETTOYAGE DES ÉTABLISSEMENTS D'ENSEIGNEMENT",
    image: "/assets/services/3.jpeg",
  },
  {
    title: "NETTOYAGE DE BUREAUX",
    image: "/assets/services/5.jpeg",
  },
  {
    title: "NETTOYAGE SECTEUR DE LA SANTÉ",
    image: "/assets/services/6.jpeg",
  },
  {
    title: "SERVICES DE NETTOYAGE COMMERCIAL",
    image: "/assets/services/7.jpeg",
  },
];

export default CarouselSection;
