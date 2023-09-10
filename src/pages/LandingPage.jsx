import youtube from '../assets/Vector.png';
import play from '../assets/play.png';
import {youtubeGloabalContext} from '../youtubeSource';
import {useNavigate} from 'react-router-dom';

const LandingPage = () => {
	const {videoSearch, search, setSearch} = youtubeGloabalContext();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (search === '') {
			alert('Enter a valid Url');
		} else {
			videoSearch(search);
			navigate('/earning');
		}
	};

	return (
		<>
			<div className="mt-20 w-3/5 m-auto flex flex-col gap-14">
				<div className="flex flex-col gap-1">
					<h1 className="text-5xl text-center leading-[72px]">
						Discover your earning potential
					</h1>
					<p className="text-2xl text-center font-thin leading-9">
						Turn your Youtube expertise into a lucrative income through resource
						sharing
					</p>
				</div>
				<form className="flex gap-2">
					<label className="px-10 py-3 flex-1 border border-gray-400 rounded-3xl flex gap-2 items-center justify-center ">
						<img src={youtube} alt="youtube" className="h-6 w-6 flex-none" />
						<input
							type="text"
							placeholder="enter youtube video link"
							className=" bg-transparent outline-none flex-1"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							required
						/>
					</label>

					<button
						type="submit"
						className="py-[18px] px-6 bg-red-500 rounded-3xl"
						onClick={handleSubmit}
					>
						Check Earning
					</button>
				</form>
			</div>

			<div className="w-[300px] h-[300px] rounded-full bg-[#FFFFFF0F] flex justify-center items-center absolute top-[70%] left-[82%]">
				<img src={play} alt="play" />
			</div>
		</>
	);
};

export default LandingPage;
