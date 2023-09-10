import {useLocation} from 'react-router-dom';
import logo from '../assets/image 2.png';
import phone from '../assets/Phone.png';
import user from '../assets/Ellipse 11.png';
import {youtubeGloabalContext} from '../youtubeSource';

const Nav = () => {
	const path = useLocation().pathname;
	const {setPopup} = youtubeGloabalContext();

	return (
		<>
			<nav>
				<div className=" mt-4 text-white flex justify-between items-center">
					<div className="flex items-center logo relative ">
						<img src={logo} alt="logo" className="h-6 w-6" />
						<span className=" text-3xl pl-4">anchor</span>
					</div>

					{path !== '/' ? (
						<div className="flex items-center gap-5">
							<div
								onClick={() => setPopup(true)}
								className="px-6 py-3 border border-gray-400 text-xl rounded-3xl flex gap-2 items-center cursor-pointer"
							>
								<img src={phone} alt="phone" className="h-5 w-5" />
								<p>Request a call back</p>
							</div>
							<div>
								<img src={user} alt="user" />
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</nav>
		</>
	);
};

export default Nav;
