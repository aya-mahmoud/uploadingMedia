import * as React from "react";
import { FlatList, Text, View } from "react-native";
import MediaCard from "./MediaCard";
import { noPostStyles as styles } from "../styles/style";

const MediaCards = ({ allPosts }) => {
  return (
    <FlatList
      data={allPosts}
      renderItem={({ item: post }) => {
        return <MediaCard post={post} />;
      }}
      keyExtractor={(item) => item._id.toString()}
      ListEmptyComponent={() => (
        <View style={styles.noPostsContainer}>
          <Text style={styles.noPostsText}>No posts yet!</Text>
        </View>
      )}
    ></FlatList>
  );
};

export default MediaCards;
