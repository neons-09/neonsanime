"use client";
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-3 flex-col">
        <FileSearch size={44} className="text-red-800" />
        <h3 className="text-2xl text-red-800"> Page not found</h3>
        <button
          onClick={() => router.back()}
          className="text-3xl text-sky-700 hover:text-red-600 transition all underline"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;
