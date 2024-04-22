import { BadgeDollarSign, CalendarRange } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const About = () => {
  return (
    <div className="relative h-[calc(100vh-12rem)] w-screen">
      <section id="about" className="h-full">
        <div className="container mx-auto h-full md:py-20">
          <div className="flex h-full items-center justify-center gap-12">
            <div className="relative mt-10 md:mt-0">
              <Image
                src="/assets/about.png"
                alt="About"
                className="rounded-md shadow-[12px_12px_0px_0px_rgba(235,209,15)]"
                width={350}
                height={330}
              />
              <div className="absolute top-0 z-20 h-full w-full rounded-md bg-black/50"></div>
            </div>
            <div className="mt-24 flex h-full w-full max-w-lg flex-col justify-start gap-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-md text-slate-400">Service au prix fixe</h2>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <BadgeDollarSign />
                    <span>Voir votre prix.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarRange />
                    <span>Réservez une heure.</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-left text-3xl font-semibold text-primaryColor md:text-4xl">
                  À propos de nous
                </h2>
                <p className="mt-5 text-lg ">
                  Nous sommes une équipe de nettoyage à domicile détenue et
                  exploitée par une famille. Notre équipe est composée de frères
                  et sœurs, de beaux-parents, de cousins, d&apos;amis et d&apos;employés
                  de longue date. Ensemble, nous prenons soin des gens, partout
                  dans la région Souss Massa. Rencontrez notre équipe.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-md bg-secondaryColor text-primaryColor hover:scale-105 hover:border-secondaryColor"
                >
                  Réserver maintenant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primaryColorLight absolute top-0 -z-10 h-[70%] w-full"></div>
    </div>
  );
};

export default About;
