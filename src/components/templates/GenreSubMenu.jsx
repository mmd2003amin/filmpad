import { GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import CardSubMenu from "../modules/CardSubMenu";

const GenreSubMenu = () => {
  const { data } = useQuery(GET_GENRES);

  return (
    <div className="sub-menu">
      {data &&
        data.genres.map((genre) => (
          <CardSubMenu data={genre} key={genre.name} />
        ))}
    </div>
  );
};

export default GenreSubMenu;
