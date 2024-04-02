import useConversation from "../../Zustand/useConversation.js";
import { extractTime } from "../../utils/extractTimr.js";

const Message = ({message , profile}) => {
	const {selectedConversation} = useConversation();
	const fromMe = message.senderId == profile?._id
	const chatClass = fromMe? "chat-end" : "chat-start"
	const profilePic = fromMe? profile.profile.name.slice(0,1) : selectedConversation.profile.name.slice(0,1)
	const bgColor = fromMe? "bg-red-400" : "bg-red-200"
	const time = extractTime(message.createdAt)
	const shakeClass = message.shouldShake ? "shake" : ""

	return (
		<div className={`chat ${chatClass}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
				<span className="bg-red-50 text-red-600 w-8 h-8 flex justify-center items-center  rounded-full">
              {profilePic}
            </span>
				</div>
			</div>
			<div className={`chat-bubble text-black ${bgColor} ${shakeClass} pb-2`}> {message.message} </div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{time}</div>
		</div>
	);
};
export default Message;