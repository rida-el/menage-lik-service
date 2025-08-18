import {
  Home,
  Hotel,
  Landmark,
  School,
  Star,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const Feedbacks = () => {
  return (
    <section className="container mt-2 flex min-h-[400px] flex-col-reverse justify-between gap-12 md:mt-28 md:flex-row">
      <div className="flex w-full items-center justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="h-full w-full md:max-w-sm"
        >
          <CarouselContent className="h-[300px] w-full p-8">
            {feedbacks.map((_, index) => (
              <CarouselItem key={index} className="pt-8">
                <div className="relative flex h-full w-full flex-col items-start justify-center  gap-5 rounded-md border border-primaryColor bg-card bg-white p-4  text-card-foreground ">
                  <div className="absolute -top-6 rounded-full border  border-primaryColor bg-primaryColorLight p-2">
                    <UserIcon className="h-8 w-8" />
                  </div>
                  <div></div>
                  <div className="flex flex-col gap-2 ">
                    <h1 className="text-xl font-semibold text-primaryColor">
                      {_.name}
                    </h1>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <StarIcon
                            key={index}
                            className="h-6 w-6 text-primaryColor"
                            fill="#ebd10f"
                          />
                        ))}
                    </div>
                  </div>
                  <p>
                    <q>{_.message}</q>
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-1/2 hidden -translate-x-8 -translate-y-4 flex-col  items-center justify-center gap-0 md:flex">
            <CarouselPrevious className="felx items-center justify-center border border-primaryColor bg-secondaryColor" />
            <CarouselNext className="border border-primaryColor bg-secondaryColor" />
          </div>
        </Carousel>
      </div>
      <div className="flex w-full flex-col gap-6">
        <div>
          <h1 className="w-full max-w-sm text-left text-3xl font-semibold text-primaryColor md:text-4xl">
            Commentaires des nos clients
          </h1>
          <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
        </div>
        <span>
          Voici quelques retours de nos clients sur notre page Facebook, que
          nous sommes fiers de partager avec vous.
        </span>
        <p className="">
          Découvrez les commentaires authentiques de nos clients satisfaits.
          Leurs avis reflètent notre engagement envers un service de qualité et
          une relation client exceptionnelle.
        </p>
      </div>
      {/* <div className="h-8"></div> */}
    </section>
  );
};

const data = [
  {
    title: "Sols résidentiels",
    icon: "<Home />",
  },
  {
    title: "Banques et des institutions financières",
    icon: "/assets/icons/",
  },
  {
    title: "Immeubles de bureaux",
    icon: "/assets/icons/",
  },
  {
    title: "Secteur de l'hôtellerie",
    icon: "/assets/icons/",
  },
  {
    title: "Restoration et services alimentaires",
    icon: "/assets/icons/",
  },
];

const feedbacks = [
  {
    name: "lamya",
    message:
      "khadija travaille très bien ma shaa allah. nous allons la garder avec nous in shaa allah. nous passerons a l'agence ce jour pour les formalites in shaa allah baaraka allahu fikoum",
  },
  {
    name: "Half Price Bourgogne",
    message: "Vos tarifs, Vos garanties, Merci",
  },
  {
    name: "Maria",
    message:
      "Toujours satisfaite et le prix est abordable. Ma famille est heureuse car mon mari et moi travaillons beaucoup. Je suis heureuse que nous ayons décidé de faire cet investissement bi-hebdomadaire et je n'ai plus à nettoyer 3 salles de bains! YIPPY! :-)",
  },
  {
    name: "Amine",
    message:
      "je suis satisfait et je n'hesiterai pas a vous contacter pour d'autres prestation et vous recommander dans mon entourage",
  },
  {
    name: "soukaina",
    message:
      "un très bon service rien a signaler je le recommande vivement Staff technique professionnel.",
  },
  {
    name: "Hicham agadir",
    message:
      "Ménage lik offre un travail de grande qualité à un prix très raisonnable. Ils répondent très rapidement aux emails et aux textos. Nous les utilisons depuis de nombreuses années et nous ne penserions pas à avoir quelqu'un d'autre pour entretenir notre maison.",
  },
];

export default Feedbacks;
