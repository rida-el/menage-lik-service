import { windowState } from "~/atoms/states";
import Logo from "./Logo";
import Nav from "./Nav";
import { useRecoilValue } from "recoil";
import { Button } from "../ui/button";

function Header() {
  const { scroll } = useRecoilValue(windowState);
  return (
    <div
      className={`duration-600 fixed z-50 bg-white/60 flex h-20 w-full items-center justify-between border-b transition-all ease-in-out ${scroll > 200 ? "!bg-white h-[70px] transition-all duration-300 border-b border-primaryColor" : ""} `}
    >
      <div className="container flex w-full items-center justify-between gap-4">
        <Logo />
        <Nav />
        <div className="Header-nav-CallToAction">
          <Button onClick={() => router.push("#contact")}>
            Contactez-Nous
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
