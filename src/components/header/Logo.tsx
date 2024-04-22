import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div>
        <Image src="/assets/logo/logo.svg" alt="Ménage lik services" width={200} height={200} />
      </div>
    </Link>
  );
}

export default Logo;
