import { MdCheck } from 'react-icons/md';

function AyozatLiveTv() {
	return (
		<div className='w-[70%] mx-auto mt-16'>
			<div className='grid justify-center grid-cols-1 gap-6 lg:grid-cols-2 white-text'>
				{/* left section */}

				<div className='w-5/6 lg:w-full md:w-1/2 lg:mr-26 md:mr-12 '>
					<img
						className='z-20 object-cover object-center w-full rounded'
						alt='hero'
						src='https://videohive.img.customer.envatousercontent.com/files/133366369/music_tv_channel_broadcast_pack_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=f47f59782de4eacfcab9fcb995f55ae9'
					/>
				</div>

				{/* right section */}
				<div className='flex flex-col items-center text-center md:items-start md:text-left md:mb-0'>
					<p className='mb-4 font-extrabold red-text xl:text-lg lg:text-lg md:text-md sm:text-sm'>
						AYOZAT <span className='font-normal white-text'>Music</span>
					</p>
					<h1 className='mb-4 font-medium title-font white-text xl:text-5xl lg:text-4xl md:text-2xl sm:text-xl'>
						Discover your favorite artist and
						<br className='hidden lg:inline-block' /> find a listen for every
						moment
					</h1>

					<div className='text-justify gray-text '>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm'>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='col-span-6 -ml-6 md:-ml-2 sm:-m-0'>
								Lorem ispum grenerator
							</span>
						</div>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm '>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='col-span-6 -ml-6 md:-ml-2 sm:-m-0'>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry standard dummy text ever since the 1500s
							</span>
						</div>
						<div className='grid grid-cols-8 mb-3 xl:text-lg lg:text-lg md:text-md sm:text-sm '>
							<MdCheck className='xl:text-3xl lg:text-xl md:text-lg sm:text-md' />{' '}
							<span className='col-span-6 -ml-6 md:-ml-2 sm:-m-0'>
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

export default AyozatLiveTv;
