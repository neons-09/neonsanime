"use client";
import { useRouter } from "next/navigation";
import { ArrowFatLineLeft } from "@phosphor-icons/react";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="text-white" onClick={handleBack}>
        <ArrowFatLineLeft size={32} />
      </button>
      <h3 className="text-2xl text-white mb-4 font-bold">{title}</h3>
    </div>
  );
};

export default Header;
