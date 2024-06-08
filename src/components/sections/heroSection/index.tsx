import React from "react";
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-[url('/assets/services/4.jpg')] md:bg-[url('/assets/bg.png')] bg-cover bg-left">
      <div className="absolute h-full w-full bg-gradient-to-t from-primaryColor to-transparent"></div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="relative z-20 flex  flex-col items-center justify-center gap-6 bg-white/65 p-4">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-primaryColor">
            Prenez du temps pour vous !
            <br />
            Ménage lik services
          </h1>
          <p className="max-w-xl text-center text-lg">
            {" "}
            vous propose une gamme complète de services pour vous permettre de
            retrouver du temps pour vous et vos proches. Vous venez de rentrer à
            la maison, souriez et détendez-vous.
          </p>
          <div className="flex w-full gap-4">
            <Button className="w-full text-primaryColor hover:scale-105">
              Services professionnel
            </Button>
            <Button className="w-full bg-primaryColor text-secondaryColor hover:scale-105 hover:bg-primaryColor">
              Services particulier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
