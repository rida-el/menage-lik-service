import { windowState } from "~/atoms/states";
import Logo from "./Logo";
import Nav from "./Nav";
import { useRecoilValue } from "recoil";
import { Button } from "../ui/button";
import { Router } from "next/router";
import Link from "next/link";

function Header() {
  const { scroll } = useRecoilValue(windowState);
  return (
    <div
      className={`fixed z-50 flex h-20 w-full items-center justify-between bg-transparent  transition-all duration-1000 ease-in-out ${scroll > 20 ? "h-[70px] !bg-white/90 !text-primaryColor transition-all duration-300" : ""} `}
    >
      <div className="container flex w-full items-center justify-between gap-4">
        <Logo />
        <Nav />
        <div className="Header-nav-CallToAction ">
          <Link href={"#contact"}>
            <Button className="text-base font-medium">Contactez-Nous</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
