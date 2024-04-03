import React, { useContext } from "react";
import { View } from "react-native";
import MediaCards from "../components/MediaCards";
import UploadFileBtn from "../components/UploadFileBtn";
import PostsContext from "../context/PostsContext";

const HomePage = () => {
  
  const { allPosts, handleMediaSelection } = useContext(PostsContext);
  return (
    <View>
      <MediaCards allPosts={allPosts} />
      <UploadFileBtn uploadMedia={handleMediaSelection} />
    </View>
  );
};

export default HomePage;
