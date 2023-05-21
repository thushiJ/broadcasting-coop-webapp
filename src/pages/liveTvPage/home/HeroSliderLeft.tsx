import { HiMusicNote } from 'react-icons/hi';

function HeroSliderLeft() {
	return (
		<div
			className='relative w-full h-full overflow-hidden rounded-lg'
			style={{
				backgroundImage: `url("https://www.billboard.com/wp-content/uploads/media/lady-gaga-performance-2009-billboard-1548.jpg")`,
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<div className=' text-white pl-[32px] bottom-0 py-8 absolute w-full bg-gradient-to-t from-black to-transparent'>
				<p className='bg-[#F50537] inline-block px-3 text-[11px] items-center p-1 text-center'>
					Playing right now
				</p>
				<p className='mt-[10px]'>Saturday, 15th may 2022</p>
				<h1 className='text-4xl font-bold mt-[10px]'>World Poker Tour</h1>
				<p className='w-[630px] mt-[10px] text-justify'>
					Watch Lady Gaga - The Art of Music on Ayozat.com streaming now in HD
					for free. Lady Gaga documentary for free on Ayozat! With the imminent
					release of Lady Gaga’s new album Artpop, there is no stopping the
					singer, songwriter, performer ...
				</p>

				<div className='mt-[10px] flex '>
					<div className='flex'>
						<button className='w-[162px] h-[42px] bg-white text-black rounded-3xl'>
							<p className='flex items-center justify-center'>
								<HiMusicNote />
								<span className='ml-2'>Watch Live</span>
							</p>
						</button>
					</div>
					<button className='w-[162px] h-[42px] border-white border-solid border-2 text-white rounded-3xl ml-3'>
						Add to watchlist
					</button>
				</div>
			</div>
		</div>
	);
}

export default HeroSliderLeft;
