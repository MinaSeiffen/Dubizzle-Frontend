import { useParams } from "react-router-dom";
import MessageContainer from "../../Components/Messages/MessagesContainer";
import Sidebar from "../../Components/SideBar/Sidebar";

const Chat = ({profile}) => {
	const {name} = useParams()

    return (
		<div className='flex top-32 justify-center sm:h-[450px] md:h-[700px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar name={name} />
			<MessageContainer profile={profile} />
		</div>
	);
}

export default Chat