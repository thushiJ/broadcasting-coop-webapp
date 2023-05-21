import '../../../../styles/card.css';
function PickupCard({ id, time, title, img }: any) {
	// movie card in video page
	return (
		<>
			<div className='flex'>
				<div
					className='relative w-16 h-20 mr-2 bg-center bg-cover rounded-lg shadow-lg bg-img'
					style={{
						color: '#fff',
						background: `url(${img}) fixed center no-repeat`,
						backgroundSize: 'cover',
					}}
				></div>
				<div className='pl-4'>
					<div className='w-[90%]'>
						<h3 className='white-text text-md'>{title}</h3>
						<p className='text-xs gray-text'>{time}</p>
					</div>
					<div className='bg-slate-600 w-[90%] h-0.5 mt-2'>
						<div className='bg-red-500 h-full w-[60%]'></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PickupCard;
