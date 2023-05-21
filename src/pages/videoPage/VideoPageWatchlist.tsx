import FilterSection from '../../components/shared/FilterSection';
import WatchlistSection from './watchlist/WatchlistSection';

function VideoPageWatchlist() {
	return (
		<div>
			{/* main topic section */}
			<div className='mb-8 flex items-center justify-between w-[98%]'>
				{/* left part */}
				<div>
					<h1 className='text-2xl font-medium text-white lg:text-3xl md:text-3xl'>
						User's Watchlist
					</h1>
				</div>
				{/* right part */}
				<FilterSection />
			</div>
			{/* card section */}

			<WatchlistSection />
		</div>
	);
}

export default VideoPageWatchlist;
