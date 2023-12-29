import Header from "@/app/components/Dashboard/header";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((collect, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${collect.anime_mal_id}`}
              className=" relative border-2 border-green-400"
            >
              <Image
                src={collect.anime_image}
                width={250}
                height={250}
                className="w-full"
              />
              <div className=" absolute w-full bg-lime-400 bottom-0 h-8">
                <h3 className="text-center text-xl">{collect.anime_title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
