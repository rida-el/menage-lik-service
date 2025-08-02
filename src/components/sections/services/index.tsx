import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { windowState } from "~/atoms/states";
import { ParticulierBooking } from "~/components/particulierBooking";
import { Button } from "~/components/ui/button";
import { Switch } from "~/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const Services = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const { width } = useRecoilValue(windowState);

  const [value, setValue] = useState("gm");
  // Define handleCheckedChange within the component scope

  const handleCheckedChange = (newChecked: boolean) => {
    // if (checked) setValue("gm");
    // else setValue("spn");
    setChecked(newChecked);
  };

  return (
    <section
      className="container flex flex-col justify-between py-28"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="w-full text-center text-3xl font-semibold text-primaryColor md:text-4xl">
          Contactez-Nous
        </h1>
        <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>

        <p className="max-w-xl text-center text-gray-400">
          Nous nettoyons votre maison, bureau et tous vous espaces toutes les
          semaines, toutes les deux semaines ou toutes les trois semaines.
        </p>
        <div className="flex items-center space-x-2">
          <h2 className="text-center font-semibold text-primaryColor">
            Services pour particulier
          </h2>
          <Switch
            id="airplane-mode"
            checked={checked}
            onCheckedChange={handleCheckedChange}
          />
          <h2 className="text-center font-semibold text-primaryColor">
            Services professionnels
          </h2>
        </div>
      </div>
      <div className="h-8"></div>
      {checked ? (
        <Tabs
          defaultChecked
          defaultValue="gm"
          className="h-full overflow-y-scroll"
        >
          <TabsList className="grid w-full grid-cols-2 gap-2 rounded-none border-b border-primaryColor bg-white px-8">
            <TabsTrigger value="gm" className="break-words uppercase">
              {width > 768
                ? "Service Professionnel de Nettoyage"
                : "Professionnel"}
            </TabsTrigger>
            <TabsTrigger value="rvl" className="break-words uppercase">
              {width > 768 ? "Réservation par Visite des Lieux" : "par Visite"}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="gm"
            className=" border border-t-0 border-primaryColor px-6 py-10 "
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center">
                <h1 className="text-center font-sans text-2xl uppercase text-primaryColor">
                  Service Professionnel de Nettoyage
                </h1>
              </div>
              <p>
                Profitez d&apos;un nettoyage professionnel sur mesure,
                parfaitement adapté à vos besoins. Notre équipe se déplace pour
                une inspection gratuite de vos locaux, garantissant un service
                optimisé et de qualité supérieure. Chaque détail est pris en
                compte pour vous offrir un espace propre et impeccable. Réservez
                dès maintenant et faites confiance à notre expertise pour un
                environnement sain et agréable !
              </p>
              <ParticulierBooking type="Professionnel de Nettoyage">
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
                >
                  Réserver maintenant
                </Button>
              </ParticulierBooking>
              <div className="container relative h-[30rem] border-2 border-secondaryColor bg-[url(/assets/s2.jpg)] bg-cover bg-center bg-no-repeat object-cover">
                <div className="absolute right-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="rvl"
            className=" border border-t-0 border-primaryColor px-6 py-10"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center">
                <h1 className="text-center font-sans text-2xl uppercase text-primaryColor">
                  Réservation par Visite des Lieux
                </h1>
              </div>
              <p>
                Profitez d&apos;un nettoyage professionnel sur mesure,
                parfaitement adapté à vos besoins. Notre équipe se déplace pour
                une inspection gratuite de vos locaux, garantissant un service
                optimisé et de qualité supérieure. Chaque détail est pris en
                compte pour vous offrir un espace propre et impeccable. Réservez
                dès maintenant et faites confiance à notre expertise pour un
                environnement sain et agréable !
              </p>
              <ParticulierBooking type="Visite des Lieux">
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
                >
                  Réserver maintenant
                </Button>
              </ParticulierBooking>
              <div className="container relative h-[30rem] border-2 border-secondaryColor bg-[url(/assets/s1.jpg)] bg-cover bg-center bg-no-repeat object-cover">
                <div className="absolute right-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <Tabs defaultChecked defaultValue="gm" className=" overflow-y-scroll">
          <TabsList className="grid w-full grid-cols-3 gap-2 rounded-none border-b border-primaryColor bg-white px-8">
            <TabsTrigger value="gm">
              {width > 768 ? "GRAND MENAGE" : "GRAND MENAGE"}
            </TabsTrigger>
            <TabsTrigger value="nv">
              {width > 768 ? "NETTOYAGE DE VITRE" : "DE VITRE"}
            </TabsTrigger>
            <TabsTrigger value="nat">
              {width > 768 ? "NETTOYAGE APRÈS TRAVAUX" : "APRÈS TRAVAUX"}
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="gm"
            className=" border border-t-0 border-primaryColor px-6 py-10"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col ">
                <h1 className=" font-sans text-2xl uppercase text-primaryColor">
                  Grand menage
                </h1>
              </div>
              <p>
                Votre maison mérite ce qu&apos;il y a de mieux ! Avec notre
                service de grand ménage en profondeur, transformez votre
                intérieur en un espace impeccable et rafraîchi. Nous mettons un
                point d&apos;honneur à nettoyer les moindres recoins souvent
                négligés, du plafond au sol, pour un résultat étincelant. Nos
                prestations incluent un nettoyage minutieux des murs, plafonds,
                fenêtres, luminaires, meubles en bois, ventilateurs de plafond,
                ainsi que des espaces sous les meubles, des miroirs, des sols,
                des appareils électroménagers et des placards de cuisine.
              </p>
              <ParticulierBooking buttons={true} type="Grand Ménage">
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
                >
                  Réserver maintenant
                </Button>
              </ParticulierBooking>

              <div className="container relative h-[30rem] border-2 border-secondaryColor bg-[url(/assets/gm.jpg)] bg-cover bg-center bg-no-repeat object-cover">
                <div className="absolute right-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="nv"
            className=" border border-t-0 border-primaryColor px-6 py-10 "
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center">
                <h1 className="text-center font-sans text-2xl uppercase text-primaryColor">
                  NETTOYAGE DE VITRE
                </h1>
              </div>
              <p>
                Redonnez à vos vitres leur éclat d&apos;origine avec notre
                service de nettoyage professionnel, à l&apos;intérieur comme à
                l&apos;extérieur. Nos experts assurent un nettoyage complet :
                aspiration des rails de fenêtres, entretien des cadrages,
                élimination des toiles d&apos;araignées et nettoyage des
                moustiquaires, le tout réalisé avec des équipements spécialisés,
                même pour les travaux en hauteur.
              </p>
              <ParticulierBooking type="nettoyage de vitre">
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
                >
                  Réserver maintenant
                </Button>
              </ParticulierBooking>
              <div className="container relative h-[30rem] border-2 border-secondaryColor bg-[url(/assets/nv.jpg)] bg-cover bg-center bg-no-repeat object-cover">
                <div className="absolute right-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="nat"
            className=" border border-t-0 border-primaryColor px-6 py-10"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col ">
                <h1 className="text-center font-sans text-2xl text-primaryColor">
                  NETTOYAGE APRÈS TRAVAUX
                </h1>
              </div>
              <p>
                Vous êtes à quelques pas de profiter d&apos;un nettoyage
                irréprochable, sans la moindre trace. Si vous pensiez que le
                nettoyage après travaux était un luxe, détrompez-vous ! Nos
                tarifs compétitifs rendent ce service accessible à tous. Nous
                nous engageons à traiter votre espace et vos matériaux avec le
                plus haut niveau de soin et de qualité.
              </p>
              <ParticulierBooking type="nettoyage après travaux">
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor "
                >
                  Réserver maintenant
                </Button>
              </ParticulierBooking>
              <div className="container relative h-[30rem] border-2 border-secondaryColor bg-[url(/assets/aw.jpg)] bg-cover bg-center bg-no-repeat object-cover">
                <div className="absolute right-0 top-0 h-full w-full bg-black/30"></div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </section>
  );
};

export default Services;
