import NeonsAnime from "@/app/components/NeonsAnime";
import Header from "@/app/components/NeonsAnime/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=12");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnime = reproduce(recommendedAnime, 20);

  return (
    <>
      <section>
        <Header
          title="Anime Terpopuler"
          linkHref="/populer"
          linkTitle="See All"
        />
        <NeonsAnime api={topAnime} />
      </section>
      <section>
        <Header title="Anime Recommended" linkHref="/populer" />
        <NeonsAnime api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
