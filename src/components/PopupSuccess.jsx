import tick from '../assets/tick.png';
const PopupSuccess = () => {
	return (
		<>
			<div>
				<img src={tick} alt="tick" className="m-auto" />
				<h2 className="text-2xl font-bold py-4 ">Request a call back </h2>
				<div className="flex flex-col gap-2">
					<p>Our Team will call you shortly in 12-24 hrs</p>
					<p>Can’t you wait for call?</p>
				</div>
			</div>
		</>
	);
};

export default PopupSuccess;
