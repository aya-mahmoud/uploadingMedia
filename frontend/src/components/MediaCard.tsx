import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardBtn from "./CardBtn.tsx";
import { BASE_URL } from "../config.js";
import PostsContext from "../context/PostsContext.tsx";
import { MediaType } from "../enums.ts";

const MediaCard = ({ post }) => {
  const { reactToPost } = useContext(PostsContext);
  const isImage = post?.mediaType === MediaType.IMAGE;
  const isVideo = post?.mediaType === MediaType.VIDEO;

  return (
    <Card sx={{ maxWidth: 345, margin: "50px auto" }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />
      {isImage ? (
        <CardMedia
          component="img"
          height="194"
          image={`${BASE_URL}/images/${post.media}`}
          alt="image"
        />
      ) : isVideo ? (
        <video
          width="100%"
          height="400erm"
          style={{ objectFit: "cover" }}
          controls
        >
          <source src={`${BASE_URL}/videos/${post.media}`} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <></>
      )}

      <CardActions disableSpacing>
        <CardBtn
          post={post}
          clickAction={reactToPost}
          label="add to favorites"
        />
        <CardBtn label="share" />
      </CardActions>
    </Card>
  );
};

export default MediaCard;
