import { useDispatch, useSelector } from "react-redux";
import { genre } from "../../features/genre/genreSlice";
import { allMovies } from "../../features/products/productsSlice";
import { GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const CardSubMenu = ({ data: { name } }) => {
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
      className="py-2 px-2 transition-all text-[13px] hover:bg-[#0000004a] w-full"
    >
      {name}
    </div>
  );
};

export default CardSubMenu;
