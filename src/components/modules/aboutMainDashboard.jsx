import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../../graphql/queries";
import shortenDate from "../../helper/shortenDate";

const AboutMainDashboard = () => {
  const { data } = useQuery(GET_USERS);

  const user = JSON.parse(localStorage.getItem("user"));
  const findUser =
    data && data.clients.find((client) => client.email === user.email);

  return (
    <>
      {findUser && (
        <div className="p-4 about-main-dashboard">
          <div>
            <div className="">نام کاربری</div>
            <div className="">{findUser.userName}</div>
          </div>
          <div>
            <div>ایمیل</div>
            <div>{findUser.email}</div>
          </div>
          <div>
            <div>شماره</div>
            <div>{findUser.number}</div>
          </div>
          <div>
            <div>رمز عبور</div>
            <div>{findUser.password}</div>
          </div>
          <div>
            <div>تاریخ عضویت</div>
            <div>{shortenDate(findUser.createdAt)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMainDashboard;
