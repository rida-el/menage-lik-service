import { AtSign, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "~/components/header/Logo";
import { Button } from "~/components/ui/button";

const Footer = () => {
  return (
    <div className="relative flex h-[12rem] w-screen items-center justify-between bg-gray-50 py-4">
      <div className="container flex flex-col items-end justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-6">
          <div className="flex h-14 w-full flex-col justify-end md:min-h-20 md:w-64">
            <Link href="/">
              <Image
                src="/assets/logo/logo.png"
                alt="Ménage lik services"
                width={200}
                height={32}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={18} className=" font-medium text-secondaryColor" />
              <p>0653153357 - 0661459552</p>
            </div>
            <div className="flex items-center gap-2">
              <AtSign size={18} className=" font-medium text-secondaryColor" />
              <p>Menage.lik.services@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="hidden text-sm md:flex">
          <p>2024 © Ménage lik services</p>
        </div>
      </div>
      <div className="absolute bottom-0 h-2 w-full bg-secondaryColor"></div>
    </div>
  );
};

export default Footer;
