import FilterSection from '../../components/shared/FilterSection';
import CardGridSection from './shared/CardGridSection';

function VideoPageHistory() {
	return (
		<div>
			{/* main topic part */}
			<div className='mb-8 flex items-center justify-between w-[98%]'>
				{/* right corner */}
				<div>
					<h1 className='text-2xl font-medium text-white lg:text-3xl md:text-3xl'>
						User's History
					</h1>
				</div>
				{/* left corner */}

				<FilterSection />
			</div>

			{/* card section */}
			<CardGridSection />
		</div>
	);
}

export default VideoPageHistory;
