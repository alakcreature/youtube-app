function Comment({ data }) {
  const {name, text, reply} = data;
  return (
    <div className="flex flex-col">
      <div className="flex my-2 shadow-sm bg-gray-100 rounded-lg">
        <img
          className="w-12"
          alt="user"
          src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
        />
        <div className="">
          <p className="font-bold mr-2">{name}:</p>
          <p>{text}</p>
        </div>
      </div>
      <div className="ml-10 border border-l-black">
        {reply?.length > 0 &&
          reply.map((comment, ind) => {
            return <Comment key={ind} data={comment} />;
          })}
      </div>
    </div>
  );
}

export default Comment;
