import { windowState, menuState } from "~/atoms/states";
import { useRecoilValue, useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import nav from "~/data/nav.json";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";

function Nav() {
  // next.js router
  const router = useRouter();

  // get width of screen
  const { width } = useRecoilValue(windowState);

  // get menu open global state
  const [menuOpen, setMenuOpen] = useRecoilState(menuState);

  if (width > 768) {
    return (
      <div className="flex items-center justify-center">
        <ul className="nav flex items-center gap-6 text-lg  text-gray-500">
          {nav.map((item, i) => (
            <li
              className={
                router.pathname === item.url ? "text-primaryColor" : ""
              }
              key={i}
            >
              <Link href={item.url}>
                <p className="no-line">{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div
      className="Header-ham-menu"
      onClick={() => setMenuOpen(!menuOpen)}
    ></div>
  );
}

export default Nav;
