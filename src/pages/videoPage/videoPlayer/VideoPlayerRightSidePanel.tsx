function VideoPlayerRightSidePanel({ isActive, videoDetails }: any) {
	return (
		<>
			{/* side bar shows on isactive variable */}
			<div
				className={`-mt-[88px] overflow-hidden ${
					isActive
						? 'sidebar z-10 navbar fixed  duration-500 left-0 p-2 md:w-[422px] w-[60px] overflow-y-hidden text-center shadow mt-0 h-full'
						: 'sidebar z-10 navbar fixed  md:left-[-100px] left-[-60px] duration-500 p-2 md:w-[100px] w-[60px] !overflow-y-hidden text-center shadow mt-0 h-full'
				}`}
			>
				{/* icon bar */}
				<div className='items-center bg-gradient-to-r from-black/90 text-gray-100 !w-[400px] pt-32 px-5 text-left !h-screen !overflow-hidden  justify-center'>
					<h1 className='text-[20px] font-bold tracking-[.2px]'>
						{videoDetails.title}
					</h1>
				</div>
			</div>
		</>
	);
}

export default VideoPlayerRightSidePanel;
