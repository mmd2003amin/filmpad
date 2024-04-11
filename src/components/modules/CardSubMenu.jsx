const CardSubMenu = ({ data: { name } }) => {
  return (
    <div className="py-2 px-2 transition-all text-[13px] hover:bg-[#0000004a] w-full">
      {name}
    </div>
  );
};

export default CardSubMenu;
