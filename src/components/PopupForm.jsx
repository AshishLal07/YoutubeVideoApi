// eslint-disable-next-line react/prop-types
const PopupForm = ({setUser, user}) => {
	return (
		<>
			<h2 className="text-2xl font-bold py-4 ">Request a call back </h2>
			<form className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Enter Name"
					value={''}
					onChange={(e) => setUser({...user, name: e.target.value})}
					className="px-5 py-[15px] bg-transparent border border-[#707070] "
				/>
				<input
					type="text"
					placeholder="Mobile number"
					value={''}
					onChange={(e) => setUser({...user, mobile: e.target.value})}
					className="px-5 py-[15px] bg-transparent border border-[#707070] "
				/>
			</form>
		</>
	);
};

export default PopupForm;
