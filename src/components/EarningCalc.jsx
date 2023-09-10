import prize from '../assets/prize.png';
import like from '../assets/like.png';
import eye from '../assets/eye.png';
import comment from '../assets/comment.png';
import rupee from '../assets/fa_rupee.png';
import {youtubeGloabalContext} from '../youtubeSource';

const EarningCalc = () => {
	const {videoDetails} = youtubeGloabalContext();

	return (
		<>
			<div className="bg-[#1E1E1E] rounded-2xl grid grid-cols-[2fr_1fr] gap-10 px-10 py-5 my-10  ">
				<div className="flex flex-col gap-5">
					<div className="bg-gray-400 w-[172px] h-[32px] flex items-center gap-2 rounded-[4px] justify-center">
						<img src={prize} alt="prize" />
						<span className="text-base">Top earner video</span>
					</div>
					<div className="flex justify-around ">
						<img
							src={videoDetails.thumbnail}
							alt="thumbnail"
							className="h-[135px] w-[240px] rounded-[10px] "
						/>
						<div>
							<h3 className="text-xl">{videoDetails.title}</h3>

							<div className=" mt-3 grid grid-cols-[1fr_7fr] gap-2  ">
								<img
									src={eye}
									alt="eye"
									className="justify-self-start self-center"
								/>
								<span className="text-base text-[#FFFFFF80]">
									{videoDetails.view}
								</span>

								<img src={like} alt="like" className="justify-self-start" />
								<span className="text-base text-[#FFFFFF80]">
									{videoDetails.like}
								</span>

								<img
									src={comment}
									alt="comment"
									className="justify-self-start"
								/>
								<span className="text-base text-[#FFFFFF80]">
									{videoDetails.comment}
								</span>
							</div>
						</div>
					</div>
					<p className="text-base text-gray-400 font-thin leading-4">
						Uploaded on - September 10, 2023
					</p>
				</div>
				<div className="px-5 py-10 bg-[#282828] my-4 rounded-2xl ">
					<div className="flex flex-col justify-center items-center gap-6  ">
						<div className="flex justify-center items-center gap-4 ">
							<img src={rupee} alt="rupee" className="h-[32px]" />
							<span className="text-[40px] font-bold">
								{videoDetails.earning}
							</span>
						</div>
						<button className="px-6 py-[18px] bg-white text-black rounded-[35px]">
							Check How?
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default EarningCalc;
