import { FaPlay } from 'react-icons/fa';
function HeroCard() {
	return (
		<div>
			<div
				className='relative h-auto shadow-lg'
				style={{
					backgroundImage: `url("https://www.billboard.com/wp-content/uploads/media/lady-gaga-performance-2009-billboard-1548.jpg")`,
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div className='backdrop-bottom'>
					<div className='pt-24 pb-4 ml-4'>
						<h1 className='text-4xl font-semibold white-text'>
							Lady Gaga <br /> The Art of Music
						</h1>
						<p className='w-32 mt-4 text-sm text-center bg-gray-600/30 gray-text'>
							Documentaries
						</p>
						<p className='mt-4 text-sm white-text'>Duration: 1h 56min</p>
						<p className='mt-4 w-[40%] leading-tight white-text'>
							American singer Lady Gaga has released five solo studio albums,
							two collaborative studio albums, two film soundtracks, three remix
							albums, two compilation albums, four EPs, two live albums, 38
							singles (including three as a featured artist), and 14 promotional
							singles. Gaga made her debut in August 2008 with the studio album
							The Fame, which peaked at number two in the United States, where
							it was subsequently certified triple Platinum, while
						</p>
						<div className='flex items-center'>
							<div className='flex items-center mt-5 text-sm xl:text-lg lg:text-lg md:text-md'>
								<button className='flex items-center px-6 py-1 font-semibold text-black bg-white border-2 border-white rounded-full'>
									<FaPlay className='mr-1 text-xs' /> Play
								</button>

								<button className='px-6 py-1 mx-3 font-semibold text-white border-2 border-white rounded-full'>
									Add to watchlist
								</button>
								<div className='flex -space-x-2 overflow-visible'>
									<img
										className='z-30 inline-block w-8 h-8 rounded-full md:h-10 md:w-10 ring-2 ring-red-700'
										src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
									<img
										className='z-20 inline-block w-8 h-8 rounded-full md:h-10 md:w-10 ring-2 ring-red-700'
										src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
										alt=''
									/>
									<img
										className='inline-block w-8 h-8 rounded-full md:h-10 md:w-10 ring-2 ring-red-700'
										src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
										alt=''
									/>
								</div>
								<p className='ml-2 text-xs md:text-sm gray-text'>
									Sam and 5 others watching
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroCard;
