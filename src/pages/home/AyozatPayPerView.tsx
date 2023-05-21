import React from 'react';
import { MdCheck } from 'react-icons/md';
import bannerImg from '../../Assets/Images/payperview.png';

function AyozatPayPerView() {
	return (
		<div className='w-[70%] mx-auto mt-16 relative z-20'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center white-text'>
				{/* left section */}
				<div className='lg:w-full md:w-1/2 w-5/6 lg:mr-26 md:mr-12 '>
					<img
						className='object-cover object-center rounded w-full'
						alt='hero'
						src={bannerImg}
					/>
				</div>

				{/* right section */}
				<div className='flex flex-col md:items-start md:text-left md:mb-0 items-center text-center'>
					<p className='font-extrabold red-text mb-4 xl:text-lg lg:text-lg md:text-md sm:text-sm'>
						AYOZAT <span className='white-text font-normal'>Payperview</span>
					</p>
					<h1 className='title-font mb-4 font-medium white-text xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl'>
						All The TV You Love
						<br className='hidden lg:inline-block' />
						All the time
					</h1>

					<div className='gray-text text-justify'>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm'>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='-ml-6 md:-ml-2 sm:ml-3 col-span-6'>
								Lorem ispum grenerator
							</span>
						</div>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm '>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='-ml-6 md:-ml-2 sm:ml-3 col-span-6'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry standard dummy text ever since the 1500s
							</span>
						</div>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm '>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='-ml-6 md:-ml-2 sm:ml-3 col-span-6'>
								Lorem Ipsum has been the industry's
							</span>
						</div>
					</div>
					<button className='white-text button-red px-8 py-1.5 font-medium rounded-full xl:text-lg lg:text-lg md:text-md sm:text-sm'>
						Explore
					</button>
				</div>
			</div>
		</div>
	);
}

export default AyozatPayPerView;
