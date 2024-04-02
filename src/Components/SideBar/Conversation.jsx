import { useSocketContext } from "../../Context/SocketContext.jsx";
import useConversation from "../../Zustand/useConversation.js";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers?.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-red-200 rounded p-2 py-1 cursor-pointer 
				${isSelected} ? "bg-red-400" : ""`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""} `}>
          <div className="w-12 rounded-full">
            <span className="bg-red-50 text-red-600 w-8 h-8 flex justify-center items-center  rounded-full">
              {conversation?.profile.name
                .slice(0, 1)
                .toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-600">
              {conversation?.profile.name}
            </p>
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
