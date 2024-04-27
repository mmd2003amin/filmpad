import React from "react";
import Empty from "../modules/Empty";

const WatchList = () => {
  return (
    <div className="px-4 md:px-10 my-12 text-text font-regular">
      <h1 className="text-[20px] font-semibold mb-6">لیست تماشا</h1>
      <Empty
        name="لیست تماشا خالی است!"
        explanation="لیست تماشا شما در این قسمت قابل مشاهده خواهد بود"
        img="/movie.png"
      />
    </div>
  );
};

export default WatchList;
