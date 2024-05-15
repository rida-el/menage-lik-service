import { AtSign, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Logo from "~/components/header/Logo";
import { Button } from "~/components/ui/button";

const Footer = () => {
  return (
    <div className="flex h-full w-screen items-center  justify-between border-t border-primaryColor bg-primaryColorLight py-4">
      <div className="container flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl ">Ménage lik services</h1>
            <div className="w-12 border-4 border-secondaryColor font-medium text-secondaryColor"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone size={24} className=" font-medium text-secondaryColor" />
              <p>0653153357 - 0661459552</p>
            </div>
            <div className="flex items-center gap-2">
              <AtSign size={24} className=" font-medium text-secondaryColor" />
              <p>Menage.lik.services@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <p>2024 © Ménage lik services</p>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Footer;
