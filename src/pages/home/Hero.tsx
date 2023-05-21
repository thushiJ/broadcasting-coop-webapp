import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
	return (
		<>
			<div className='mt-10 relative z-20'>
				<div className='text-white text-center font-semibold xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl'>
					All your entertaintment needs, <br /> finally in one place.
				</div>
				<p className='text-center small-text mt-8 xl:text-lg lg:text-lg md:text-md text-sm '>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the
					<br /> industry's standard dummy text ever since the 1500s,
				</p>

				<div className='flex justify-center mt-5 xl:text-lg lg:text-lg md:text-md text-sm'>
					<Link to='/welcome'>
						<button className='text-black bg-white border-2 border-white px-6 py-1 rounded-full font-semibold'>
							Explore as a guest
						</button>
					</Link>
					<button className='ml-5 text-white border-2 border-white px-6 py-1 rounded-full font-semibold'>
						Become a creator
					</button>
				</div>
			</div>
		</>
	);
}

export default Hero;
