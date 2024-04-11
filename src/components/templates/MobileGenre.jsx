import { GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import CardSubMenuMobile from "../modules/CardSubMenuMobile";

const MobileGenre = ({ openSubMenuGenre }) => {
  const { data } = useQuery(GET_GENRES);

  return (
    <div
      className={`bg-[#0f1c2e] overflow-hidden duration-500 ${
        openSubMenuGenre ? "h-[33rem]" : "h-0"
      }`}
    >
      {data &&
        data.genres.map((genre) => (
          <CardSubMenuMobile data={genre} key={genre.name} />
        ))}
    </div>
  );
};

export default MobileGenre;
