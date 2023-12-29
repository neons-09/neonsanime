import { Eye } from "@phosphor-icons/react";
import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className=" flex justify-between p-3 items-center">
      <h1 className="text-xl font-bold text-white hover:text-red-600">
        {title}
      </h1>
      <Link
        href={linkHref}
        className="md:text-xl text-md underline text-white hover:text-red-600 transition-all flex gap-1"
      >
        {linkTitle}
        <button className="bottom-1"></button>
      </Link>
    </div>
  );
};

export default Header;
