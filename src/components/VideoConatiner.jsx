import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";

function VideoConatiner() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const res = await data.json();
    setVideos(res.items);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if(videos.length===0) return null;

  return (
    <div className="flex flex-wrap gap-1">
      {videos.map((video) => {
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
}

export default VideoConatiner;
