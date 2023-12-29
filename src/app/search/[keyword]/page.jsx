import NeonsAnime from "@/app/components/NeonsAnime";
import Header from "@/app/components/NeonsAnime/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;

  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header
          title={`Search To ${decodedKeyword}`}
          linkHref="/populer"
          linkTitle="See All"
        />
        <NeonsAnime api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
