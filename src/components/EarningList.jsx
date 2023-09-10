const EarningList = () => {
	return (
		<>
			<h3 className="text-2xl text-center">Other Videos Potentials</h3>
			<div className=" mt-4 mb-2  p-6 font-bold hidden bg-[#1E1E1E] md:grid md:grid-cols-[1fr_repeat(6,2fr)_3fr] items-center justify-items-center  gap-2 ">
				<p>Rank</p>
				<p>Title</p>
				<p>Thumbnail</p>
				<p>Views</p>
				<p>Likes</p>
				<p>Comments</p>
				<p>Uploaded on</p>
				<p>*Estimated Earning</p>
			</div>
		</>
	);
};

export default EarningList;
