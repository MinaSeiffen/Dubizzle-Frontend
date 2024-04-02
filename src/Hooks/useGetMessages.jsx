import { useEffect, useState } from "react";
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const token = localStorage.getItem('jwt');

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`http://localhost:3000/chat/${selectedConversation._id}`,{
					method: 'GET',
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getMessages();
		console.log(messages)
	}, [selectedConversation?._id, setMessages]);
	return { messages, loading };
};

export default useGetMessages;
