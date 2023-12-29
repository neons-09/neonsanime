import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className=" mt-8 flex justify-center items-center flex-col">
      <h3 className="text-2xl text-white font-italic ">
        Welcome, {user?.name}
      </h3>
      <Image
        src={user?.image}
        className="image-dashboard mt-4 rounded"
        alt="..."
        width={250}
        height={150}
      />
      <div className=" flex flex-wrap py-8 gap-4">
        <Link
          href="/users/dashboard/collection"
          className="bg-red-600 text-black px-4 py-3 text-xl hover:text-white transition all"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-red-600 text-black px-4 py-3 text-xl hover:text-white transition all"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
