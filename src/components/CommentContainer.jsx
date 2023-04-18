import Comment from "./Comment";

const comment = [
  {
    name: "Shubham",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.",
    reply: [
      {
        name: "Kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.",
        reply: [],
      },
    ],
  },
  {
    name: "Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.",
    reply: [
      {
        name: "Shubham",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.",
        reply: [
          {
            name: "Kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, facilis.",
            reply: [],
          },
        ],
      },
    ],
  },
];

function CommentContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold my-2">Comments: </h1>
      {comment?.length > 0 &&
        comment.map((element, ind) => {
          return <Comment key={ind} data={element} />;
        })}
    </div>
  );
}

export default CommentContainer;
