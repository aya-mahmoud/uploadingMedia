import * as React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";

const CardBtn = ({ icon, post, clickAction }) => (
  <View>
    <IconButton
      icon={icon}
      iconColor={post?.like ? "#ff69b4" : "grey"}
      size={20}
      onPress={() => clickAction?.(post?._id)}
    />
  </View>
);

export default CardBtn;
