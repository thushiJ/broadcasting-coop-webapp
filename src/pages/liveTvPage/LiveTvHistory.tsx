import LiveTvHistoryChannelList from './history/LiveTvHistoryChannelList';
import WatchedPrograms from './history/WatchedPrograms';
import LiveTvHistoryCoursel from './history/LiveTvHistoryCoursel';

const LiveTvHistory = () => {
	return (
		<div>
			<div>
				<h1 className='text-white text-[30px] pt-1 pl-1 font-bold'>
					Watch history
				</h1>
			</div>
			<div>
				<div className='flex justify-between w-[95%] my-[36px] '>
					<h1 className='text-white md:text-xl text-md '>
						Programes you watched recently{' '}
					</h1>
				</div>
				<LiveTvHistoryCoursel />
			</div>
			<div>
				<div className='flex justify-between w-[95%] my-[36px] '>
					<h1 className='text-white md:text-xl text-md '>
						Recently watched Channel you might like
					</h1>
				</div>
				<LiveTvHistoryChannelList />
			</div>
			<div>
				<div>
					<h1 className='text-white md:text-xl text-md '>
						All watched programes
					</h1>
				</div>
				<WatchedPrograms />
			</div>
		</div>
	);
};

export default LiveTvHistory;
