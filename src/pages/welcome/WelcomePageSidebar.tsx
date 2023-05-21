import { HiMusicNote } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaPodcast } from 'react-icons/fa';
import { MdOutlineRadio, MdLiveTv } from 'react-icons/md';
import { BsCameraVideo } from 'react-icons/bs';
function WelcomePageSidebar({ isActive }: any) {
	return (
		<>
			{/* side bar shows on isactive variable */}
			<div
				className={
					isActive
						? 'sidebar navbar fixed  duration-500 left-0 p-2 md:w-[100px] w-[60px] overflow-y-auto text-center shadow mt-2 h-full'
						: 'sidebar navbar fixed  md:left-[-100px] left-[-60px] duration-500 p-2 md:w-[100px] w-[60px] overflow-y-auto text-center shadow mt-2 h-full'
				}
			>
				{/* icon bar */}
				<div className='items-center text-gray-100'>
					<div className='mb-10'>
						<Link to='/video'>
							<button className='items-center p-1 mb-1 rounded-full button-red md:p-2'>
								<BsCameraVideo className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>Video</p>
						</Link>
					</div>

					<div className='mb-10'>
						<Link to='/video'>
							<button className='p-1 mb-1 rounded-full button-red md:p-2'>
								<HiMusicNote className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>Music</p>
						</Link>
					</div>
					<div className='mb-10'>
						<Link to='/livetv'>
							<button className='p-1 mb-1 rounded-full button-red md:p-2'>
								<MdLiveTv className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>Live Tv</p>
						</Link>
					</div>
					<div className='mb-10'>
						<Link to='/video'>
							<button className='p-1 mb-1 rounded-full button-red md:p-2'>
								<FaPodcast className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>Podcast</p>
						</Link>
					</div>
					<div className='mb-10'>
						<Link to='/video'>
							<button className='p-1 mb-1 rounded-full button-red md:p-2'>
								<HiMusicNote className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>PPV</p>
						</Link>
					</div>
					<div className='mb-10'>
						<Link to='/video'>
							<button className='p-1 mb-1 rounded-full button-red md:p-2'>
								<MdOutlineRadio className='text-lg md:text-2xl' />
							</button>

							<p className='text-xs gray-text'>Radio</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default WelcomePageSidebar;
