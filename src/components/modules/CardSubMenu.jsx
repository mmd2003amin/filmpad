import { useDispatch } from "react-redux";
import { genre } from "../../features/genre/genreSlice";

const CardSubMenu = ({ data: { name } }) => {
  const dispatch = useDispatch();

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
