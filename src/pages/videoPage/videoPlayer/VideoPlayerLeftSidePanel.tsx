import { FaPlay } from 'react-icons/fa';

function VideoPlayerLeftSidePanel({ isActive, videoDetails }: any) {
	return (
		<>
			{/* side bar shows on isactive variable */}
			<div
				className={`-mt-[88px] overflow-hidden ${
					isActive
						? 'sidebar z-10 navbar fixed  duration-500 right-0 p-2 md:w-[422px] w-[60px] overflow-y-hidden text-center shadow mt-0 h-full'
						: 'sidebar z-10 navbar fixed  md:right-[-100px] right-[-60px] duration-500 p-2 md:w-[100px] w-[60px] overflow-y-hidden text-center shadow mt-0 h-full'
				}`}
			>
				{/* icon bar */}
				<div className='items-center text-gray-100 !w-[400px] pt-32 px-5 text-left !h-screen !overflow-hidden justify-center'>
					<h1 className='text-[20px] font-bold tracking-[.2px]'>
						{videoDetails.title}
					</h1>
					<div
						className='pt-8'
						dangerouslySetInnerHTML={{
							__html: videoDetails.description,
						}}
					></div>
					<div className='flex justify-center my-5'>
						<button className='bg-[#F50537] py-[16px] text-white flex justify-center items-center text-[19px] font-bold w-[373px] leading-6 rounded-full mx-auto'>
							<span className='mr-2'>
								<FaPlay />
							</span>
							Invite to watch party
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default VideoPlayerLeftSidePanel;
