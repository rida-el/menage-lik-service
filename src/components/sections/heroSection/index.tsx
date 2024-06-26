import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-[url('/assets/services/1.jpg')] bg-cover bg-left md:bg-[url('/assets/bg.png')]">
      <div className="absolute h-full w-full bg-opacity-65 bg-gradient-to-t from-primaryColor to-black/50"></div>
      <div className="flex h-full w-full items-center justify-center ">
        <div className="relative z-20 flex  flex-col items-center justify-center gap-6 bg-white/65 p-4">
          <h1 className="text-center text-2xl font-bold text-primaryColor md:text-4xl">
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
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <Link href="#contact" className="w-full">
              <Button className="w-full text-primaryColor hover:scale-105">
                Services professionnel
              </Button>
            </Link>
            <Link href="#contact" className="w-full">
              <Button className="w-full bg-primaryColor text-secondaryColor hover:scale-105 hover:bg-primaryColor">
                Services particulier
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
