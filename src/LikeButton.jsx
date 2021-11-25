import React from "react";

const LikeButton = (props) => {
  return(
    <button>いいね数: {props.count}</button>
  )
}

export default LikeButton