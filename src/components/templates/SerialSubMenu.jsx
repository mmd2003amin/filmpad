import { listSeries } from "../../constant/listSeries";
import CardSubMenu from "../modules/CardSubMenu";

const SerialSubMenu = () => {
  return (
    <div className="sub-menu">
      {listSeries.map((serial) => (
        <CardSubMenu data={serial} key={serial.id} />
      ))}
    </div>
  );
};

export default SerialSubMenu;
