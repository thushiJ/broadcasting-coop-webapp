import FilterSection from '../../components/shared/FilterSection';
import CardGridSection from './shared/CardGridSection';

function VideoPageFavorite() {
	return (
		<div>
			{/* main topic section */}
			<div className='mb-8 flex items-center justify-between w-[98%]'>
				{/* left part */}
				<div>
					<h1 className='text-2xl font-medium text-white lg:text-3xl md:text-3xl'>
						User's Favorite
					</h1>
				</div>
				{/* right part */}

				<FilterSection />
			</div>
			{/* card section */}
			<CardGridSection />
		</div>
	);
}

export default VideoPageFavorite;
