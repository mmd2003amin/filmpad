import React from "react";
import shortenDate from "../../helper/shortenDate";

const ListRequests = ({ user }) => {
  return (
    <table className="w-full rounded-md bg-box2 h-fit text-sm 400:text-[15px]">
      <thead className="centering flex-col justify-start py-10">
        <tr className="w-11/12 centering justify-around list-req-film text-primary">
          <td>عنوان</td>
          <td>نوع</td>
          <td>تاریخ</td>
          <td>وضعیت</td>
          <td>پیام</td>
        </tr>
        {user.reqFilms.map((item) => (
          <tr
            key={item.id}
            className="w-11/12 centering justify-around list-req-film h-24 620:h-fit"
          >
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{shortenDate(item.createdAt)}</td>
            <td>{item.statuss}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default ListRequests;
