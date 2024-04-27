import React, { useState } from "react";
import Empty from "../modules/Empty";
import { useMutation, useQuery } from "@apollo/client";
import { REQUEST_FILM } from "../../graphql/mutations";
import { GET_USERS } from "../../graphql/queries";
import ListRequests from "../modules/listRequests";
import { notify } from "../../utils/Notify";
const type = ["فیلم", "سریال"];

const MovieRequest = () => {
  const [name, setName] = useState("فیلم");
  const [text, setText] = useState("");
  const email = JSON.parse(localStorage.getItem("user")).email;

  const users = useQuery(GET_USERS);
  const user =
    users.data && users.data.clients.find((user) => user.email === email);

  const [reqFilm] = useMutation(REQUEST_FILM, {
    variables: {
      name: text,
      type: name,
      id: users.data && user.id,
    },
  });

  const requestHandler = () => {
    reqFilm();
    notify("success", "درخواست شما با موفقیت ارسال شد!");
  };

  return (
    <>
      <div className="px-4 md:px-10 my-12 text-text font-regular">
        <h1 className="text-[20px] font-semibold mb-6">درخواست فیلم و سریال</h1>
        <div className="w-full rounded-md bg-box2 h-fit py-10">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="درخواست فیلم یا سریال"
            className="bg-box w-11/12 rounded-lg p-4 outline-none centering mx-auto"
          />

          <div className="w-11/12 flex justify-start flex-col items-start mx-auto mt-5">
            <h1 className="text-[15px] font-medium">انتخاب دسته بندی</h1>
            <div className="bg-box p-4 my-3 rounded-lg h-14 centering w-40">
              {type.map((item) => (
                <p
                  key={item}
                  onClick={(e) => setName(e.target.innerText)}
                  className={`${
                    name === item && "movie-filter"
                  } cursor-pointer px-5 py-2.5`}
                >
                  {item}
                </p>
              ))}
            </div>
            <button
              onClick={requestHandler}
              className="text-[15px] font-bold px-2.5 py-4 rounded-md bg-primary text-black"
            >
              ارسال درخواست
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 mb-12 text-text font-regular">
        <h1 className="text-[20px] font-semibold mb-6">درخواست های شما</h1>

        {user.reqFilms ? (
          <ListRequests key={user.id} user={user} />
        ) : (
          <Empty
            name="شما درخواستی ارسال نکرده اید!"
            explanation="برای ارسال درخواست فرم بالا را پر کنید"
            img="/movie.png"
          />
        )}
      </div>
    </>
  );
};

export default MovieRequest;
