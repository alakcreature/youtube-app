import { Link } from "react-router-dom";

function VideoCard({ info }) {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <Link to={"/watch?v=" + info.id}>
      <div className="p-2 m-2 w-52 shadow-xl">
        <img
          className="rounded-lg w-48"
          alt="thumbnail"
          src={thumbnails?.high?.url}
        />
        <ul>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics?.viewCount} views</li>
        </ul>
      </div>
    </Link>
  );
}

export default VideoCard;


const AdVideoCard = ({info})=>{
  return (
    <div className="p-1 m-1 border border-red-500">
      <VideoCard info={info} />
    </div>
  )
}

export {AdVideoCard};
