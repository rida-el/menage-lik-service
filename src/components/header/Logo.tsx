import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="relative h-96 w-60 ">
      <Link href="/">
        <Image src="/assets/logo/logo.svg" alt="Ménage lik services" fill />
      </Link>
    </div>
  );
}

export default Logo;
