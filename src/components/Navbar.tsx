import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./Navicons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-6 lg:px-16 xl:32 2xl:px-30 relative">
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Green Shop</div>
        </Link>
        <Menu />
      </div>

      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center justify-between gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={40} height={40} />
            <div className="text-2xl tracking-wide text-green-600">
              Green Shop
            </div>
          </Link>
          <div className="hiddin xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-center gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
