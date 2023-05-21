import { HiMusicNote } from 'react-icons/hi';
import '../../../shared/movieCard.css';
function MovieCard({ id, time, title, info, year, type, img }: any) {
	// movie card in video page
	return (
		// <div className="mx-2 rounded-lg movie-card">
		// 	<div className="mx-[10%] py-2 movie-content">
		// 		<p className="mb-2 text-xs title">{title}</p>
		// 		<div className="relative z-20 w-card">
		// 			<div
		// 				className="relative h-64 rounded-lg w-44"
		// 				style={{
		// 					color: '#fff',
		// 					background: `url(${img}) fixed center no-repeat`,
		// 					backgroundSize: '100%',
		// 				}}
		// 			>
		// 				<div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
		// 					{time ? (
		// 						<>
		// 							<p className="text-sm align-bottom">{time}</p>{' '}
		// 							<button className="items-center p-2 rounded-full add-button button-red">
		// 								<HiMusicNote className="text-md" />
		// 							</button>
		// 						</>
		// 					) : (
		// 						''
		// 					)}
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="mt-1 bottom-details">
		// 			<h2 className="mb-1 font-bold black-text text-md">{info}</h2>
		// 			<p className="mb-1 text-xs gray-text">{year}</p>
		// 			<p className="mb-1 text-xs gray-text">{type}</p>
		// 		</div>
		// 	</div>
		// </div>
		<div className='mx-2 rounded-lg'>
			<div className='mx-[10%] w-full py-2'>
				<p className='mb-2 text-xs title'>{title}</p>
				<div className='relative z-20 w-card'>
					<div
						className='relative h-64 rounded-lg w-44 bg-img'
						style={{
							color: '#fff',
							background: `url(${img}) fixed center no-repeat`,
							backgroundSize: '100%',
						}}
					>
						<div className='absolute inset-x-0 bottom-0 flex justify-between p-2'>
							{time ? (
								<>
									<p className='text-sm align-bottom'>{time}</p>{' '}
									<button className='items-center p-2 rounded-full add-button button-red'>
										<HiMusicNote className='text-md' />
									</button>
								</>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				{/* <div className="mt-1 bottom-details">
					<h2 className="mb-1 font-bold black-text text-md">{info}</h2>
					<p className="mb-1 text-xs gray-text">{year}</p>
					<p className="mb-1 text-xs gray-text">{type}</p>
				</div> */}
			</div>
		</div>
	);
}

export default MovieCard;
