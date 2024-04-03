import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-red-500 p-4 flex flex-col w-[600px]'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
		</div>
	);
};
export default Sidebar;