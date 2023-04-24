import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeRandomName } from "../utils/helpers";

function LiveChat() {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.chat);
  const [liveMessage, setliveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: makeRandomName(5),
          message: makeRandomName(10),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-auto flex flex-col-reverse">
      {
        messages?.length>0 && messages.map((message, ind)=>{
            return <ChatMessage key={ind} name={message.name} message={message.message} />
        })
      }
    </div>
    <form className="w-full p-2 m-2 border border-black" onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name: "Shubham",
        message: liveMessage
      }));
      setliveMessage("");
    }}>
      <input className="w-[300px]" type="text" value={liveMessage} onChange={(e)=>setliveMessage(e.target.value)} />
      <button className="px-2 mx-2 bg-green-100" onClick={()=>{}}>Send</button>
    </form>
    </>
  );
}

export default LiveChat;
