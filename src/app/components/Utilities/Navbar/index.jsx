import Link from "next/link";
import InputSearch from "./InputSearch";
import { UserAction } from "./UserAction";

const Navbar = () => {
  return (
    <header className="bg-teal-400">
      <div className="flex  md:flex-row flex-col justify-between md:items-center p-3">
        <Link href="/" className="font-bold text-2xl">
          Neons<span>Anime</span>
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
};

export default Navbar;
