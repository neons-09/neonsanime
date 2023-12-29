"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState();
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleInput = (event) => {
    setComment(event.target.value);
  };

  const handlePosting = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment("");
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      {isCreated && <p className="text-white">Sucess Comment</p>}
      <textarea
        className="h-32 w-full text-xl "
        value={comment}
        onChange={handleInput}
      />
      <button
        onClick={handlePosting}
        className="w-52 py-2 px-2 bg-green-500 rounded"
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentInput;
