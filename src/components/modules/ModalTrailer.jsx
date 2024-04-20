import React from "react";
import { IoIosClose } from "react-icons/io";

const ModalTrailer = ({ open, setOpen, src, poster }) => {

  return (
    <div
      className={`z-50 fixed top-0 right-0 h-[100vh] w-full bg-subMenu overflow-auto duration-300 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="rounded-[10px] p-4 footer-width bg-box2 mx-auto my-7">
        <div className="centering justify-between mb-8">
          <h1 className="text-[15px] font-medium">تریلر</h1>
          <IoIosClose
            onClick={() => setOpen(false)}
            className="bg-[#0000002b] size-[30px] rounded-full text-[10px] p-0.5 cursor-pointer"
          />
        </div>

        <div>
          <video
            src={src}
            poster={poster}
            controls
            className="size-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalTrailer;
