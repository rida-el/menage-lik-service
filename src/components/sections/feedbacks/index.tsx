import { Home, Hotel, Landmark, School } from "lucide-react";
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
    <section className="container mt-28 flex min-h-[400px] justify-between flex-col md:flex-row">
      <div className="flex w-full flex-col gap-6">
        <div>
          <h1 className="w-full max-w-sm text-left text-3xl font-semibold text-primaryColor md:text-4xl">
            Commentaires des nos clients
          </h1>
          <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
        </div>
        <p>
          Découvrez les commentaires authentiques de nos clients satisfaits.
          Leurs avis reflètent notre engagement envers un service de qualité et
          une relation client exceptionnelle.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex w-full items-center justify-center py-6">
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-xs"
        >
          <CarouselContent className="h-[300px] py-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1">
                <div className="flex h-full items-center justify-center rounded-md border bg-card bg-white p-1  text-card-foreground ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  possimus beatae adipisci delectus deserunt non quod cumque
                  ratione, labore, illum at quae facilis quos? Id quas deleniti
                  placeat molestias eligendi?
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
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

export default Feedbacks;
