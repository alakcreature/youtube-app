function ChatMessage({ name, message }) {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-6"
        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
        alt="user-icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;
