import { HiArrowRight } from 'react-icons/hi';

function GridCard({ theme, title, info, img }: any) {
	return (
		<div
			className={
				theme === 'light'
					? 'button-white pt-4 gridCard-hover -mt-6'
					: 'background-gray pt-4 gridCard-hover -mt-6'
			}
		>
			<div className='w-[90%] mx-auto'>
				<div className='w-[60%]'>
					<h3
						className={
							theme === 'light' ? 'text-black mb-4' : 'text-white mb-4'
						}
					>
						<span className='mr-2 font-extrabold red-text lg:text-xl md:text-lg sm:text-md '>
							AYOZAT
						</span>{' '}
						{title}
					</h3>
					<p
						className={
							theme === 'light'
								? 'text-black font-medium mb-4'
								: 'text-white font-medium mb-4'
						}
					>
						{info}
					</p>
					<p
						className={
							theme === 'light'
								? 'text-black font-medium flex items-center cursor-pointer'
								: 'text-white font-medium flex items-center cursor-pointer'
						}
					>
						Explore <HiArrowRight className='ml-2' />
					</p>
				</div>
				{/* bottom image */}
				<div className='w-full'>
					<img
						src='https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-6..v1575422587.png'
						// src={img}
						alt='card figure'
						className='w-full mt-8 overflow-hidden shadow-2xl img-shadow'
						style={{
							backgroundSize: '100%',
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default GridCard;
