import { useState } from 'react';
import { HiMusicNote } from 'react-icons/hi';
import { MdAddCircleOutline } from 'react-icons/md';
import '../../../styles/card.css';

function MovieCard({ id, time, title, img }: any) {
	// movie card in welcome page
	const [isActive, setIsActive] = useState(false);

	//toggle dropdown
	const dropDown = (e: any) => {
		e.preventDefault();
		console.log('dropdown');
		setIsActive((current) => !current);
	};
	return (
		<>
			<div className='relative z-20 w-[95%] w-card'>
				{/*bakground image  */}
				<div
					className='relative w-48 rounded-lg shadow-lg h-72 bg-img'
					style={{
						color: '#fff',
						background: `url(${img}) fixed center no-repeat`,
						backgroundSize: 'cover',
					}}
				>
					<div className='absolute inset-x-0 bottom-0 flex justify-between p-2'>
						{/* add time if avaiable */}
						{time ? (
							<>
								<p className='text-sm align-bottom'>{time}</p>{' '}
								{isActive ? (
									<button
										className='items-center p-2 rounded-full button-red'
										onClick={dropDown}
									>
										<HiMusicNote className='text-md' />
									</button>
								) : (
									<button
										className='items-center p-2 rounded-full add-button button-red'
										onClick={dropDown}
									>
										<HiMusicNote className='text-md' />
									</button>
								)}
							</>
						) : (
							''
						)}
					</div>
					{isActive && (
						<div className='watchlist-dropdown p-4 rounded-md text-sm absolute white-text bottom-[40px] left-[-15px] duration-500 border-2 border-1 border-neutral-500 overflow-y-visible'>
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
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default MovieCard;
