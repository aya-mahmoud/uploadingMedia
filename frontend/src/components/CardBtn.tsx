import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const CardBtn = ({ post, clickAction, label }) => (
  <IconButton aria-label={label} onClick={() => clickAction?.(post?._id)}>
    {label === "share" ? 
      <ShareIcon />
    : 
      <FavoriteIcon className={post?.like ? "like-icon" : "dislike-icon"} />
    }
  </IconButton>
);

export default CardBtn;
