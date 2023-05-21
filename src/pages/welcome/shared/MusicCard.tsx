function MusicCard({ id, artisit, title, img }: any) {
	// music card in welcome page
	return (
		<div className='relative z-20 w-full w-card'>
			{/* background image */}
			<div
				className='relative h-56 mb-3 bg-center bg-no-repeat rounded-lg shadow-lg w-44 bg-img'
				style={{
					color: '#fff',
					background: `url(${img}) fixed center no-repeat`,
					backgroundSize: 'cover',
				}}
			></div>
			{title ? <h2 className='text-white text-md'>{title}</h2> : <></>}
			{artisit ? <p className='text-sm gray-text'>{artisit}</p> : <></>}
		</div>
	);
}

export default MusicCard;
