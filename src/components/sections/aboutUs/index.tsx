import { Home, Hotel, Landmark, School } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

const AboutUs = () => {
  return (
    <section className="container my-16 flex flex-col justify-between ">
      <div className="flex w-full flex-col gap-1">
        <h1 className="w-full text-left text-3xl font-semibold text-primaryColor md:text-4xl">
          Menage Lik services{" "}
        </h1>
        <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
      </div>
      <div className="h-8"></div>
      <div className="grid w-full grid-cols-1 justify-between overflow-hidden rounded-t-md border border-primaryColor md:grid-cols-3 lg:grid-cols-5">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className={`flex w-full items-center gap-3  px-2 py-6 hover:bg-slate-100 `}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md  border-secondaryColor p-1 text-primaryColor">
                {index === 0 ? (
                  <Home />
                ) : index === 1 ? (
                  <Landmark />
                ) : index === 2 ? (
                  <School />
                ) : index === 3 ? (
                  <Hotel />
                ) : (
                  <Home />
                )}
              </div>
              <p>{item.title}</p>
            </div>
          </>
        ))}
      </div>
      <div className="hidden w-full flex-nowrap justify-between overflow-hidden rounded-b-md border border-t-0 border-primaryColor md:grid md:grid-cols-3 lg:grid-cols-5 ">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className={`flex w-full items-center gap-3  px-2 py-6 hover:bg-slate-100 `}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md p-1 text-primaryColor">
                {index === 0 ? (
                  <Home />
                ) : index === 1 ? (
                  <Landmark />
                ) : index === 2 ? (
                  <School />
                ) : index === 3 ? (
                  <Hotel />
                ) : (
                  <Home />
                )}
              </div>
              <p>{item.title}</p>
            </div>
          </>
        ))}
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

export default AboutUs;
