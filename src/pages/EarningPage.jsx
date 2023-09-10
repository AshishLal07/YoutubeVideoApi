import EarningCalc from '../components/EarningCalc';
import EarningList from '../components/EarningList';
import VideoCardBox from '../components/VideoCardBox';
import Popup from '../components/Popup';
import {youtubeGloabalContext} from '../youtubeSource';
import {ProgressBar} from 'react-loader-spinner';

const EarningPage = () => {
	const {isLoading, popup} = youtubeGloabalContext();

	if (isLoading) {
		return (
			<>
				<div className="flex justify-center items-center h-1/2">
					<p className="text-xl">Loading please wait</p>
					<ProgressBar
						height="80"
						width="100px"
						ariaLabel="progress-bar-loading"
						wrapperStyle={{}}
						wrapperClass="progress-bar-wrapper"
						borderColor="#F4442E"
						barColor="#51E5FF"
					/>
				</div>
			</>
		);
	}
	return (
		<>
			<div>
				{popup && <Popup />}
				<EarningCalc />
				<EarningList />
				<VideoCardBox />
				<VideoCardBox />
			</div>
		</>
	);
};

export default EarningPage;
