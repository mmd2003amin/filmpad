import React from "react";

const Empty = ({ name, explanation, img }) => {
  return (
    <div className="w-full rounded-md bg-box2 h-[24rem]">
      <div className="centering flex-col mx-auto my-8">
        <img src={img} alt="ticket" className="w-40 mb-4" />
        <h1 className="text-lg font-semibold mb-2">{name}</h1>
        <p className="text-sm font-normal opacity-60 w-11/12 text-center">
          {explanation}
        </p>
      </div>
    </div>
  );
};

export default Empty;
