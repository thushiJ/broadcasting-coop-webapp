import { FaPlay } from 'react-icons/fa';

function WatchlistCard({ id, title, images }: any) {
	return (
		<div className='relative z-20 w-card h-[288px] w-[224px] add-new-card rounded-md overflow-hidden mb-4 shadow-md'>
			<div className='w-full h-full'>
				{/* dynamic grid display according to images length or use the last comment section */}
				{images.length === 1 ? (
					<div
						className='relative h-[288px] w-[224px] bg-img white-text'
						style={{
							background: `url(${images[0]}) no-repeat center`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					></div>
				) : images.length <= 4 ? (
					<div className='grid grid-cols-2'>
						{images.slice(0, 4).map((img: any) => (
							<div
								className='relative h-[144px] w-[112px] bg-img white-text'
								style={{
									background: `url(${img}) no-repeat center`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
						))}
					</div>
				) : (
					<div className='grid grid-cols-3'>
						{images.slice(0, 9).map((img: any) => (
							<div
								className='relative h-24 w-18 bg-img white-text'
								style={{
									background: `url(${img}) no-repeat center`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
						))}
					</div>
				)}

				{/* grid end */}
			</div>

			{/* blured section */}
			<div className='absolute bottom-0 w-full p-2 white-text backdrop-blur-md bg-gray-900/50'>
				<p className='text-md'>{title}</p>
				<div className='flex items-center justify-between'>
					<p className='text-sm gray-text'>{images.length} Videos</p>
					<div className='text-xs rounded-full bg-slate-900/40'>
						<button className='p-3'>
							<FaPlay />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WatchlistCard;

// use this nstead of above grid section
{
	/* <div className="grid grid-cols-3">
						{images.map((img) => (
							<div
								className="relative h-24 w-18 bg-img white-text"
								style={{
									background: `url(${img}) no-repeat center`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
						))}
					</div> */
}
