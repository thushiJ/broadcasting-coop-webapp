import LiveTvPlayer from '../../../../Assets/Images/LiveTvPlayer.png';

function LiveTVCard2() {
	return (
		<div className='w-[65%] mx-auto mt-16 relative z-20'>
			<div className='grid justify-center grid-cols-1 gap-8 lg:grid-cols-2 white-text'>
				{/* left section */}
				<div className='w-5/6 lg:w-full md:w-1/2'>
					<img
						className='z-20 object-cover object-center w-full rounded shadow-xl'
						alt='hero'
						src={LiveTvPlayer}
					/>
				</div>
				{/* right section */}
				<div className='flex flex-col items-center text-center md:items-start md:text-left md:mb-0'>
					<h1 className='title-font mb-4 text-[32px] white-text w-[530px] font-[700]'>
						Join in with your friends for a Listening party and enjoy
					</h1>

					<div className='mt-2 text-justify gray-text'>
						<div className='grid grid-cols-8 mb-3 text-[20px] font-[400]'>
							<p className='-ml-6 md:-ml-2 sm:ml-3 col-span-6 w-[540px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam
							</p>
						</div>
					</div>
					<div className='flex justify-between mt-6'>
						<button className='white-text button-red px-8 py-1.5 w-[177px] mr-4 font-medium rounded-full xl:text-lg lg:text-lg md:text-md sm:text-sm'>
							CTA one
						</button>
						<button className='white-text border border-white px-8 py-1.5 w-[177px] font-medium rounded-full xl:text-lg lg:text-lg md:text-md sm:text-sm'>
							CTA Two
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LiveTVCard2;
