import React, { useContext } from "react";
import PostsContext from "../context/PostsContext.tsx";
import MediaCards from "../components/MediaCards.tsx";
import UploadFileBtn from "../components/UploadFileBtn.tsx";

const HomePage = () => {
  const { allPosts, uploadMedia } = useContext(PostsContext);

  return (
    <div>
      <h2>Images List </h2>
      <MediaCards allPosts={allPosts} />
      <UploadFileBtn uploadMedia={uploadMedia} />
    </div>
  );
};

export default HomePage;
