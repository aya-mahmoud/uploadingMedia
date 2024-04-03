import React, {
  useEffect,
  useState,
  useCallback,
  createContext,
  useMemo,
} from "react";
import { Alert } from "react-native";
import axios from "axios";
import { BASE_URL } from "../config";
import * as ImagePicker from "expo-image-picker";

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
        oldPosts.map((post) =>
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
      formData.append("media", {
        uri: media.uri,
        type: media.mimeType,
        name: getFileNameFromUri(media.uri),
      });

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

  // Function to handle Media selection
  const handleMediaSelection = useCallback(async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        Alert.alert("Permission to access camera roll is required!");
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!pickerResult.cancelled) {
        uploadMedia(pickerResult.assets[0]);
      }
    } catch (error) {
      // console.error("Error selecting image:", error);
      Alert.alert("An error occurred while selecting Media. Please try again.");
    }
  }, []);

  const getFileNameFromUri = useCallback((uri) => {
    const uriComponents = uri.split("/");
    return uriComponents[uriComponents.length - 1];
  }, []);

  const contextValue = useMemo(
    () => ({
      allPosts,
      getPosts,
      reactToPost,
      uploadMedia,
      handleMediaSelection,
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
