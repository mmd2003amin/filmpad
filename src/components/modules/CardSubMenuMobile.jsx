import { useDispatch } from "react-redux";
import { genre } from "../../features/genre/genreSlice";

const CardSubMenuMobile = ({ data: { name } }) => {
  const dispatch = useDispatch();

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
