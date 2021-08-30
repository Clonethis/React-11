import React from "react";
// import { render } from "sass";
import VideoItem from "./VideoItem";
const VideoList = ({ videos }) => {
  // props.videos
  // console.log(typeof videos);
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });
  return <div className="ui items">{renderedList}</div>;
};
export default VideoList;
