import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { id } = useParams();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      name: comment.name,
      email: comment.email,
      text: comment.text,
      slug: id,
    },
  });

  const commentHandler = (e) => {
    setComment((comment) => ({ ...comment, [e.target.name]: e.target.value }));
  };

  return (
    <div className="footer-width mx-1 xs:mx-auto text-text my-7 comment-inputs">
      <h1 className="text-[17px] font-bold">دیدگاهتان را بنویسید!</h1>

      <input
        value={comment.text}
        onChange={commentHandler}
        name="text"
        type="text"
        placeholder="نظرتان را بنویسید"
        className="py-7 w-full mt-5 placeholder:absolute placeholder:top-2"
      />

      <div className="centering w-full mt-4">
        <input
          type="text"
          placeholder="نام"
          className="ml-2 w-1/2 py-4"
          value={comment.name}
          onChange={commentHandler}
          name="name"
        />

        <input
          type="text"
          placeholder="ایمیل"
          className="mr-2 w-1/2 py-4"
          value={comment.email}
          onChange={commentHandler}
          name="email"
        />
      </div>

      <button
        onClick={() => createComment()}
        className="text-[#1b1b1b] mt-4 text-sm font-medium rounded-md bg-primary py-4 px-[22px] w-full md:w-fit"
      >
        فرستادن دیدگاه
      </button>
    </div>
  );
};

export default Comments;
