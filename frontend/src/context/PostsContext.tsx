import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";

const PostsContext = createContext(null);

export const PostContextProvider = (props) => {
  const { children } = props;
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = useCallback(async () => {
    try {
      const result = await axios.get(`${BASE_URL}/getPosts`);
      setAllPosts(result.data.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []);

  const reactToPost = useCallback(async (postId) => {
    try {
      const result = await axios.put(`${BASE_URL}/reactToPost/${postId}`);
      setAllPosts((oldPosts) =>
        oldPosts?.map((post) =>
          post._id === postId ? { ...result.data } : post
        )
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }, []);

  const uploadMedia = useCallback(async (media) => {
    try {
      const formData = new FormData();
      formData.append("media", media);
      const result = await axios.post(`${BASE_URL}/uploadPost`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPosts();
      }
    } catch (error) {
      console.error("Error uploading Media:", error);
      alert("Upload Failed. Please try again later.");
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      allPosts,
      getPosts,
      reactToPost,
      uploadMedia,
    }),
    [allPosts]
  );

  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
