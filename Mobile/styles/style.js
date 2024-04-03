import { StyleSheet } from "react-native";

export const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export const uploadBtnStyles = StyleSheet.create({
    btnContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
    },
});

export const cardStyles = StyleSheet.create({
    container: {
        margin: 10,
    },
    btnContainer: {
        marginRight: "auto",
    },
    cardCover: {
        width: 350,
        height: 200,
    },
    video: {
        width: '100%',
        // width: 350,
        height: 200,
    },
});

export const noPostStyles = StyleSheet.create({
    noPostsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noPostsText: {
        textAlign: "center",
        margin: 100,
    },
});