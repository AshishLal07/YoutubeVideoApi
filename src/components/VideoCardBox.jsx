import {youtubeGloabalContext} from '../youtubeSource';

const VideoCardBox = () => {
	const {videoDetails} = youtubeGloabalContext();
	return (
		<>
			<div>
				<div className="py-2 bg-[#1E1E1E80] text-base font-thin text-[#FFFFFFCC] md:grid md:grid-cols-[1fr_repeat(6,2fr)_3fr] items-center justify-items-center gap-2 s">
					<p>2</p>
					<p>{videoDetails.title}</p>
					<img
						src={videoDetails.thumbnail}
						alt=""
						className="w-[120px] h-[67.5px] rounded-[10px]"
					/>
					<p>{videoDetails.view}</p>
					<p>{videoDetails.like}</p>
					<p>{videoDetails.comment}</p>
					<p>June 23, 2023</p>
					<p>{videoDetails.earning}</p>
				</div>
			</div>
		</>
	);
};

export default VideoCardBox;
