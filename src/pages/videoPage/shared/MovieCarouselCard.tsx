import { useState } from 'react';
import { HiMusicNote, HiOutlineStar, HiLightningBolt } from 'react-icons/hi';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaPlay } from 'react-icons/fa';
import '../../../styles/card.css';
function MovieCarouselCard({ id, time, title, info, year, type, img }: any) {
	// used in every coursel
	const [isActive, setIsActive] = useState(false);

	//toggle dropdown
	const dropDown = (e: any) => {
		e.preventDefault();
		console.log('dropdown');
		setIsActive((current) => !current);
	};
	return (
		<div className='grid mx-2 rounded-lg movie-card place-items-center'>
			<div className='py-2 movie-content'>
				{title && <p className='mb-2 text-xs title'>{title}</p>}
				<div className='relative z-20 w-card'>
					{/* background image */}
					<div
						className='relative w-56 rounded-lg h-80 bg-img'
						style={{
							color: '#fff',
							background: `url(${img}) fixed center no-repeat`,
							backgroundSize: 'cover',
						}}
					>
						{/* play button */}
						<div className='flex items-center justify-center play-button h-80'>
							<button className='p-3 rounded-full'>
								<FaPlay />
							</button>
						</div>

						{/* booster icon */}
						<div className='absolute flex booster-button rounded-full items-center bottom-8 bg-white w-[76px] ml-1 mb-1 cursor-pointer'>
							<button className='p-1 rounded-full cursor-pointer'>
								<HiLightningBolt className='text-xs ' />
							</button>
							<p className='ml-1 text-xs cursor-pointer'>Booster</p>
						</div>
						{/* time and two buttons */}
						<div className='absolute inset-x-0 bottom-0 flex items-center justify-between p-2'>
							{time ? (
								<>
									<p className='text-sm align-bottom'>{time}</p>{' '}
									<div>
										<button className='items-center p-2 mr-2 rounded-full add-button'>
											<HiOutlineStar className='text-md' />
										</button>
										<button
											className={`items-center p-2 rounded-full  ${
												isActive ? 'button-red' : 'add-button'
											}`}
											onClick={() => {
												setIsActive((val: boolean) => !val);
											}}
										>
											<HiMusicNote className='text-md' />
										</button>
									</div>
								</>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				{/* bottom section */}
				<div className='mt-1 bottom-details'>
					<h2 className='mb-1 font-bold black-text text-md'>{info}</h2>
					<p className='mb-1 text-xs gray-text'>{year}</p>
					<p className='mb-1 text-xs gray-text'>{type}</p>
				</div>

				{/* watchlist section */}
				{isActive && (
					<div className='watchlist-dropdown p-4 rounded-md text-sm absolute white-text bottom-[125px] left-[35px] duration-500 border-2 border-neutral-500 overflow-y-visible'>
						<ul className='list-none'>
							<li className='mb-2 cursor-pointer'>Weekend Series</li>
							<li className='mb-2 cursor-pointer'>Adventure</li>
							<li className='mb-2 cursor-pointer'>Adventure 2</li>
							<li className='mb-2 cursor-pointer'>Watchlist #2</li>
							<li className='mb-2 cursor-pointer'>Watchlist #3</li>
							<hr className='mb-2 cursor-pointer border-1 border-neutral-500 ' />
							<li className='flex items-center cursor-pointer '>
								<MdAddCircleOutline />
								<p className='ml-1'>Create new watchlist</p>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}

export default MovieCarouselCard;
