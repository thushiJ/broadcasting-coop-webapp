import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import { FiLogOut } from 'react-icons/fi';
import VideoPlayer from './home/shared/VideoPlayer';
import VideoService from '../../services/VideoService';
import VideoPlayerLeftSidePanel from './videoPlayer/VideoPlayerLeftSidePanel';
import VideoPlayerRightSidePanel from './videoPlayer/VideoPlayerRightSidePanel';

function VideoPlayerPage() {
	const navigate = useNavigate();
	const { name } = useParams();
	const playerRef = useRef(null);

	const [videoDetails, setVideoDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	const [openSideModal, setOpenSideModal] = useState(false);
	const [exploreSeries, setExploreSeries] = useState(false);

	//load data according to the id
	useEffect(() => {
		setLoading(true);
		VideoService.getDetailsBySlug(name)
			.then((res) => {
				console.log(res.data);
				setVideoDetails(res.data);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	}, []);

	const videoJsOptions = {
		sources: [
			{
				// src: '//vjs.zencdn.net/v/oceans.mp4',
				src: 'https://vz-be062780-4dc.b-cdn.net/d69e5cf2-9d16-4ff8-8d2d-471d47488bc1/playlist.m3u8',
				// type: 'video/mp4',
			},
		],
	};

	return (
		<>
			<VideoPlayerLeftSidePanel
				isActive={openSideModal}
				videoDetails={videoDetails}
			/>

			<VideoPlayerRightSidePanel
				isActive={exploreSeries}
				videoDetails={videoDetails}
			/>
			<div className={`flex items-center justify-between w-[90%] mx-auto `}>
				<div className='!z-50 flex items-center mt-10'>
					<div
						className={`!z-20 flex items-center justify-center w-10 h-10 text-2xl bg-white rounded-full  ${
							exploreSeries
								? 'bg-gray-700 duration-500 text-gray-900'
								: 'bg-white duration-500 cursor-pointer'
						}`}
						onClick={() => {
							!exploreSeries && navigate('/video');
						}}
					>
						<HiArrowLeft />
					</div>
					<div
						className={`!z-50 flex items-center justify-center w-9 h-9 text-2xl ml-4 text-white rounded-full cursor-pointer ${
							exploreSeries
								? 'bg-red-600 duration-500'
								: 'bg-black/80 duration-500'
						}`}
						onClick={() => setExploreSeries((val) => !val)}
					>
						<AiOutlineInfoCircle />
					</div>
					<div
						className={`pt-1 pl-10 text-base duration-500 font-bold bg-white rounded-full w-44 h-9 -ml-9  ${
							exploreSeries
								? 'w-44 block pt-1 pl-10 duration-200'
								: 'w-0 hidden duration-200'
						}`}
					>
						Explore series
					</div>
				</div>
				<div
					className={`!z-50 flex items-center justify-center w-10 h-10 text-2xl bg-white rounded-full cursor-pointer mt-10 ${
						openSideModal ? 'mr-[250px] duration-500 z-30' : 'mr-0 duration-500'
					}`}
					onClick={() => setOpenSideModal((val) => !val)}
				>
					{openSideModal ? <FiLogOut /> : <CiLogout />}
				</div>
			</div>

			{/* <div className='-mt-20'>
				{!loading ? (
					// <VideoPlayery options={videoJsOptions} onReady={handlePlayerReady} />
					<VideoPlayer videoDetails={videoDetails} />
				) : (
					<></>
				)}
			</div> */}

			<VideoPlayer options={videoJsOptions} />
		</>
	);
}

export default VideoPlayerPage;
