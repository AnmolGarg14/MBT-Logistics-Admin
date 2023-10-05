import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <section className="py-3">
      <div className="p-2 flex justify-between">
        <div className="flex items-center">
          <div className="pr-3">
            <Image src="/logo.svg" width={30} height={30} alt="logo" />
          </div>
          <Link href="/">
            <div className="font-semibold text-white">MBT Admin Panel</div>
          </Link>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <div className="md:flex hidden gap-4">
            <Image
              src="/search.svg"
              width={20}
              height={20}
              alt="icon"
              className="icon"
            />
            <Image
              src="/app.svg"
              width={20}
              height={20}
              alt="icon"
              className="icon"
            />
            <Image
              src="/expand.svg"
              width={20}
              height={20}
              alt="icon"
              className="icon"
            />
          </div>
          <div className="flex justify-between items-center px-2">
            <Image
              src="/profile.svg"
              width={20}
              height={20}
              alt="profileimg"
              className="rounded-full"
            />
            <span className="pl-4 text-white">Admin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
