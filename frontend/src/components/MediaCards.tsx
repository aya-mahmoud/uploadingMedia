import React from "react";
import MediaCard from "./MediaCard.tsx";

const MediaCards = ({ allPosts }) => {
  return (
    <div>
      {allPosts === null
        ? "No posts yet!"
        : allPosts?.map((post) => <MediaCard key={post?._id} post={post} />)}
    </div>
  );
};

export default MediaCards;
