import Image from "next/image";
import Link from "next/link";

const NeonsAnime = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="cursor-pointer text-white hover:text-red-500 transition all"
            key={index}
          >
            <Image src={anime.images.webp.image_url} width={250} height={250} />
            <h3 className="font-bold md:text-x text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default NeonsAnime;
