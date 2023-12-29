"use client";
import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }
  };

  return (
    <>
      {isCreated ? (
        <h3 className="text-xl text-green-400 py-1 px-2  gap-1">
          Successfully Saved to Collection
        </h3>
      ) : (
        <button
          className="text-xl text-white py-1 px-2 bg-yellow-300 rounded hover:text-red-500"
          onClick={handleCollection}
        >
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
