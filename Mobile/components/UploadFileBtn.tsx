import * as React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { uploadBtnStyles as styles } from "../styles/style";

const UploadFileBtn = ({ uploadMedia }) => (
  <View>
    <Button
      style={styles.btnContainer}
      icon="upload"
      buttonColor={"#4169e1"}
      mode="contained"
      onPress={() => uploadMedia()}
    >
      Upload File
    </Button>
  </View>
);

export default UploadFileBtn;
