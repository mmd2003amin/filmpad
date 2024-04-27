import React from "react";
import Empty from "../modules/Empty";

const AllComments = () => {
  return (
    <div className="px-4 md:px-10 my-12 text-text font-regular">
      <h1 className="text-[20px] font-semibold mb-6">آرشیو اعلانات</h1>
      <Empty
        name="آرشیو نظرات"
        explanation="نظرات شما برای ما مهم هست نظرات خودتون رو برای ما ارسال کنید."
        img="/ticket.png"
      />
    </div>
  );
};

export default AllComments;
