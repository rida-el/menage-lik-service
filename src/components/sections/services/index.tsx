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

  const [value, setValue] = useState("spn");
  // Define handleCheckedChange within the component scope

  const handleCheckedChange = (newChecked: boolean) => {
    setChecked(newChecked);
    if (value === "gm" && !checked) setValue("spn");
    else setValue("gm");
  };

  return (
    <section
      className="container flex flex-col justify-between py-28"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-center text-3xl uppercase font-semibold text-primaryColor md:text-4xl">
          Question et réponse
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
          className="mt-6 h-full overflow-y-scroll"
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
                <h1 className="text-center font-sans text-3xl uppercase text-primaryColor">
                  Service Professionnel de Nettoyage
                </h1>
              </div>
              <p className="text-center">
                Service Professionnel de Nettoyage - Réservation par Visite des
                Lieux Nous offrons un service professionnel de nettoyage adapté
                à vos besoins spécifiques. Notre approche commence par une
                évaluation minutieuse de vos locaux pour garantir une prestation
                sur mesure et de qualité supérieure. Lorsque vous prenez
                rendez-vous avec nous, notre équipe expérimentée se déplace sur
                les lieux pour effectuer une inspection approfondie. Cette
                visite nous permet de comprendre vos exigences en matière de
                nettoyage et de déterminer les meilleures solutions pour
                répondre à vos attentes. Notre processus de réservation par
                visite des lieux garantit une planification précise et une
                prestation de service optimale. Vous pouvez être assuré que
                chaque aspect de vos locaux sera pris en compte pour assurer un
                nettoyage complet et efficace. Faites confiance à notre équipe
                professionnelle pour vous fournir un environnement propre et
                impeccable. Contactez-nous dès aujourd&apos;hui pour planifier
                votre visite des lieux et bénéficier de notre expertise en
                matière de nettoyage professionnel.
              </p>
              <ParticulierBooking>
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
                <h1 className="text-center font-sans text-3xl uppercase text-primaryColor">
                  Réservation par Visite des Lieux
                </h1>
              </div>
              <p className="text-center">
                Service Professionnel de Nettoyage - Réservation par Visite des
                Lieux Nous offrons un service professionnel de nettoyage adapté
                à vos besoins spécifiques. Notre approche commence par une
                évaluation minutieuse de vos locaux pour garantir une prestation
                sur mesure et de qualité supérieure. Lorsque vous prenez
                rendez-vous avec nous, notre équipe expérimentée se déplace sur
                les lieux pour effectuer une inspection approfondie. Cette
                visite nous permet de comprendre vos exigences en matière de
                nettoyage et de déterminer les meilleures solutions pour
                répondre à vos attentes. Notre processus de réservation par
                visite des lieux garantit une planification précise et une
                prestation de service optimale. Vous pouvez être assuré que
                chaque aspect de vos locaux sera pris en compte pour assurer un
                nettoyage complet et efficace. Faites confiance à notre équipe
                professionnelle pour vous fournir un environnement propre et
                impeccable. Contactez-nous dès aujourd&apos;hui pour planifier
                votre visite des lieux et bénéficier de notre expertise en
                matière de nettoyage professionnel.
              </p>
              <ParticulierBooking>
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
              <div className="flex flex-col items-center">
                <h1 className="text-center font-sans text-3xl uppercase text-primaryColor">
                  Grand menage
                </h1>
              </div>
              <p className="text-center">
                Service de Grand Ménage Résidentiel De temps en temps, il est
                nécessaire d&apos;effectuer un grand ménage en profondeur de
                votre maison pour atteindre les zones souvent négligées. Notre
                service se distingue par une attention particulière aux détails,
                assurant ainsi une apparence impeccable à votre domicile. Nos
                prestations comprennent le nettoyage des murs, des plafonds, des
                fenêtres, des luminaires, des meubles en bois, des ventilateurs
                de plafond, ainsi que le nettoyage sous les meubles, des
                miroirs, des sols, des appareils ménagers et des placards de
                cuisine. Nos techniciens s&apos;engagent à fournir un service de
                qualité, respectant nos valeurs fondamentales telles que
              </p>
              <ParticulierBooking buttons={true}>
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
                <h1 className="text-center font-sans text-3xl uppercase text-primaryColor">
                  NETTOYAGE DE VITRE
                </h1>
              </div>
              <p className="text-center">
                Service de Nettoyage de Vitres avec Estimation Gratuite Réservez
                dès maintenant un spécialiste pour le lavage complet de vos
                vitres, à la fois intérieur et extérieur. Nous assurons
                également l&apos;aspiration dans les rails des fenêtres, le
                nettoyage des cadrages et l&apos;élimination des nids
                d&apos;araignées, ainsi que le nettoyage du moustiquaire, le
                tout effectué avec des outils professionnels adaptés aux travaux
                en hauteur. Vous pouvez avoir confiance en nos professionnels
                qui sont soigneusement sélectionnés et vérifiés avant chaque
                intervention. Notre processus de réservation est simple,
                abordable, rapide et sécurisé. De plus, vous avez la liberté de
                modifier ou d&apos;annuler votre réservation à tout moment, sans
                engagement. Personnalisez votre prestation selon vos besoins
                spécifiques et bénéficiez d&apos;un suivi attentif de votre
                réservation. Nous nous engageons à fournir des services de
                qualité, avec des professionnels expérimentés, évalués après
                chaque séance pour assurer votre satisfaction totale.
              </p>
              <ParticulierBooking>
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
              <div className="flex flex-col items-center">
                <h1 className="text-center font-sans text-3xl text-primaryColor">
                  NETTOYAGE APRÈS TRAVAUX
                </h1>
              </div>
              <p className="text-center">
                Félicitations ! Vous êtes sur le point de bénéficier d&apos;un
                espace parfaitement nettoyé, sans traces. Pour ceux qui estiment
                que le nettoyage après travaux est un luxe, nos tarifs
                abordables rendent ce service accessible à tous. Nos services
                spécialiste s&apos;engagent à traiter vous et vos matériaux avec
                le plus haut niveau de qualité. Nos services incluent:
                *Personnel de confiance. *Réservation facile, abordable, rapide
                et sécurisé. *Liberté de modifier ou d&apos;annuler votre
                réservation a tout moment, sans engagement. Possibilité de
                choisir vos techniciens favoris. Suivi attentif de votre
                réservation. Technicien expérimenté, vérifier avant chaque
                intervention et évalués après chaque séance. Nos techniciens
                adhérents à notre engagement simple: Offrir un service de
                qualité répondant aux attentes de nos clients. Afin de rendre
                les corvées ménagère un lointain souvenir. Ils s&apos;engagent
                également à respecter nos 6 valeurs fondamentales: * Intégrité *
                Courtoisie * Fiabilité * discrétion * autonomie * ponctualité
              </p>
              <ParticulierBooking>
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
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
