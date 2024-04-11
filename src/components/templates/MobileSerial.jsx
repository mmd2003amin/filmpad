import { listSeries } from "../../constant/listSeries";

import CardSubMenuMobile from "../modules/CardSubMenuMobile";

const MobileSerial = ({ openSubMenuSerial }) => {
  return (
    <div
      className={`bg-[#0f1c2e] overflow-hidden duration-500 ${
        openSubMenuSerial ? "h-[13.5rem]" : "h-0"
      }`}
    >
      {listSeries.map((genre) => (
        <CardSubMenuMobile data={genre} key={genre.name} />
      ))}
    </div>
  );
};

export default MobileSerial;
