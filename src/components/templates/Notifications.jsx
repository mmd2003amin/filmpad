import React from "react";
import Empty from "../modules/Empty";

const Notifications = () => {
  return (
    <div className="px-4 md:px-10 my-12 text-text font-regular">
      <h1 className="text-[20px] font-semibold mb-6"></h1>
      <Empty
        name="آرشیو اعلانات"
        explanation="اعلانات مربوط به شما در این بخش قابل مشاهده خواهند بود."
        img="/ticket.png"
      />
    </div>
  );
};

export default Notifications;
