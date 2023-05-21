import { useState } from 'react';
import { HiMusicNote } from 'react-icons/hi';
import '../../../styles/card.css';

function GridCard({ title, img, time }: any) {
	// used in watchlist, history and favorite pages as card component
	const [isActive, setIsActive] = useState(false);

	//toggle dropdown
	const dropDown = (e: any) => {
		e.preventDefault();
		console.log('dropdown');
		setIsActive((current) => !current);
	};
	return (
		<div>
			<div className='mx-2 rounded-lg'>
				<div className='mx-[10%] w-full py-2'>
					{title && <p className='mb-2 text-xs title'>{title}</p>}
					<div className='relative z-20 w-card h-80'>
						{/* backgrond image */}
						<div
							className='relative w-48 rounded-lg h-72 bg-img white-text'
							style={{
								background: `url(${img}) no-repeat center`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							{/* card inside content */}
							<div className='absolute inset-x-0 bottom-0 flex justify-between p-2'>
								{time ? (
									<>
										<p className='text-sm align-bottom'>{time}</p>{' '}
										<button
											className='items-center p-2 rounded-full add-button button-red'
											onClick={dropDown}
										>
											<HiMusicNote className='text-md' />
										</button>
										{/* {isActive ? (
											<button
												className="items-center p-2 rounded-full button-red"
												onClick={dropDown}
											>
												<HiMusicNote className="text-md" />
											</button>
										) : (
											<button
												className="items-center p-2 rounded-full add-button button-red"
												onClick={dropDown}
											>
												<HiMusicNote className="text-md" />
											</button>
										)} */}
									</>
								) : (
									''
								)}
							</div>
						</div>
					</div>
				</div>

				{/* hover watchlist */}
				{/* {isActive && (
					<div className="watchlist-dropdown p-4 rounded-md text-sm white-text relative bottom-[125px] left-[35px] duration-500 border-2 border-neutral-500 overflow-y-visible">
						<li className="mb-2 cursor-pointer">Weekend Series</li>
						<li className="mb-2 cursor-pointer">Adventure</li>
						<li className="mb-2 cursor-pointer">Adventure 2</li>
						<li className="mb-2 cursor-pointer">Watchlist #2</li>
						<li className="mb-2 cursor-pointer">Watchlist #3</li>
						<hr className="mb-2 cursor-pointer border-1 border-neutral-500 " />
						<li className="flex items-center cursor-pointer ">
							<MdAddCircleOutline />
							<p className="ml-1">Create new watchlist</p>
						</li>
					</div>
				)} */}
			</div>
		</div>
	);
}

export default GridCard;
