import React from "react";
const VideoItem = (props) => {
  console.log("VideoItem props : ", props);
  return (
    <div onClick={() => props.onVideoSelect(props.video)} className="item">
      <div className="image">
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="content">
        <a className="header">{props.video.snippet.title}</a>
        <div className="meta"></div>
        <div className="description">
          <p>{props.video.snippet.description}</p>
        </div>

        <div class="extra">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            {props.video.snippet.channelTitle}
          </a>
        </div>
      </div>
      {/* <img src={props.snippet.thumbnails.default.url} alt="" /> */}
    </div>
  );
};
export default VideoItem;
