/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */

import {useContext, createContext, useState} from 'react';

const youtubeContext = createContext();

export const YoutubeContextProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState('');
	const [popup, setPopup] = useState(false);
	const [videoDetails, setVideoDetails] = useState({
		title: '',
		thumbnail: '',
		earning: 0,
		view: 0,
		like: 0,
		comment: 0,
		sub: 0,
	});

	const [thumbnail, setThumbnail] = useState('');

	const videoSearch = async (search) => {
		const API_KEY = 'AIzaSyCQu3-ic47ld7zoPrPTj-mYVeMzWD_-NeM';
		const urlParms = new URL(search);
		const videoId = urlParms.searchParams.get('v');

		const vidResp = await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
		);

		const data = await vidResp.json();
		const channelId = data.items[0]['snippet']['channelId'];
		const title = data.items[0]['snippet']['localized']['title'];

		if (vidResp.ok) {
			const thumbnailImg =
				data.items[0]['snippet']['thumbnails']['medium']['url'];

			const subResp = await fetch(
				`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
			);
			const vidResp = await fetch(
				`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`
			);
			const subData = await subResp.json();
			const vidData = await vidResp.json();

			if (subResp.ok && vidResp.ok) {
				const {commentCount, likeCount} = vidData.items[0].statistics;
				const {subscriberCount, viewCount} = subData.items[0].statistics;
				setThumbnail(thumbnailImg);

				setVideoDetails({
					title,
					thumbnail: thumbnailImg,
					view: viewCount,
					like: likeCount,
					comment: commentCount,
					sub: subscriberCount,
					earning: earningCalc(
						commentCount,
						likeCount,
						subscriberCount,
						viewCount
					),
				});
				setIsLoading(false);
			}
		}
	};

	const earningCalc = (commentCount, likeCount, subCount, viewCount) => {
		const earning =
			Math.min(subCount, viewCount) + 10 * commentCount + 5 * likeCount;
		return earning;
	};

	return (
		<youtubeContext.Provider
			value={{
				popup,
				thumbnail,
				videoDetails,
				isLoading,
				search,
				setPopup,
				setIsLoading,
				videoSearch,
				setVideoDetails,
				setSearch,
			}}
		>
			{children}
		</youtubeContext.Provider>
	);
};

export const youtubeGloabalContext = () => useContext(youtubeContext);
