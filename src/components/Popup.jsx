import {useState} from 'react';
import PopupForm from './PopupForm';
import PopupSuccess from './PopupSuccess';
import arrow from '../assets/arrow.png';
import {useNavigate} from 'react-router-dom';
import {youtubeGloabalContext} from '../youtubeSource';

const Popup = () => {
	const [user, setUser, setSearch] = useState({name: '', mobile: ''});
	const [reqCall, setReqCall] = useState(false);
	const {setPopup} = youtubeGloabalContext();
	const navigate = useNavigate();
	return (
		<>
			<div className="min-w-screen h-screen animated  bg-[#FFFFFF33]  fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none ">
				<div className="absolute opacity-10 insset-0 z-0"></div>
				<div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-[#282828] ">
					<div className="">
						<div className="text-center p-10 flex-auto justify-center">
							{reqCall ? (
								<PopupSuccess />
							) : (
								<PopupForm setUser={setUser} user={user} />
							)}
						</div>

						<div className="p-3  mt-2 text-center space-x-4 md:block">
							{!reqCall ? (
								<button
									onClick={() => setReqCall(true)}
									className="mb-2 md:mb-0 bg-white px-5 py-2 text-xl shadow-sm font-medium tracking-wider border text-black rounded-full hover:shadow-lg hover:bg-gray-100"
								>
									Request a Call Back
								</button>
							) : (
								<button
									onClick={() => {
										setReqCall(false);
										setPopup(false);
										setSearch('');
										navigate('/');
									}}
									className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600 flex gap-2 m-auto"
								>
									Check another video <img src={arrow} alt="arrow" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Popup;
