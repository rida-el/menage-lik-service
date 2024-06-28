import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative min-h-14 md:min-h-20 h-full w-56 md:w-64 ">
      <Link href="/">
        <Image src="/assets/logo/logo.png" alt="Ménage lik services" fill />
      </Link>
    </div>
  );
}

export default Logo;
