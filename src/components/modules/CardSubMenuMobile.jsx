import { useDispatch, useSelector } from "react-redux";
import { genre } from "../../features/genre/genreSlice";
import { GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const CardSubMenuMobile = ({ data: { name } }) => {
  const dispatch = useDispatch();
  const genreName = useSelector((state) => state.genre.genre);
  const genres = useQuery(GET_GENRES);

  const filterData =
    genres.data &&
    genres.data.genres.filter((genre) => genre.name === genreName);
  filterData &&
    setTimeout(() => dispatch(allMovies(filterData[0]?.films)), 500);

  return (
    <div
      onClick={(e) => dispatch(genre(e.target.innerText))}
      className="p-4 transition-all text-[14px]"
    >
      {name}
    </div>
  );
};

export default CardSubMenuMobile;
