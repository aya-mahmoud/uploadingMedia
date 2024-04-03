import { Card } from "react-native-paper";
import { useContext } from "react";
import CardBtn from "./CardBtn";
import { cardStyles as styles } from "../styles/style";
import PostsContext from "../context/PostsContext";
import { BASE_URL } from "../config.js";
import { MediaType } from "../enums";
import { Video, ResizeMode } from "expo-av";
import { StatusBar } from "react-native";

const MediaCard = ({ post }) => {
  const { reactToPost } = useContext(PostsContext);
  const isImage = post?.mediaType === MediaType.IMAGE;
  const isVideo = post?.mediaType === MediaType.VIDEO;

  return (
    <Card style={styles.container}>
      <StatusBar hidden={isVideo} />
      {isImage ? (
        <Card.Cover
          style={styles.cardCover}
          source={{ uri: `${BASE_URL}/images/${post.media}` }}
        />
      ) : isVideo ? (
        <Video
          source={{ uri: `${BASE_URL}/videos/${post.media}` }}
          style={styles.video}
          useNativeControls
          resizeMode={ResizeMode.COVER}
          isLooping
        />
      ) : (
        <></>
      )}
      <Card.Actions style={styles.btnContainer}>
        <CardBtn icon="heart" post={post} clickAction={reactToPost} />
        <CardBtn icon="share" />
      </Card.Actions>
    </Card>
  );
};
export default MediaCard;
