import LiveTvHistoryChannelList from './history/LiveTvHistoryChannelList';
import WatchedPrograms from './history/WatchedPrograms';
import LiveTvHistoryCoursel from './history/LiveTvHistoryCoursel';

const LiveTvDiscover = () => {
	return (
		<div>
			<div>
				<h1 className='text-white text-[30px] pt-1 pl-1 font-bold'>
					Discover programes and channels
				</h1>
			</div>
			<div>
				<div className='flex justify-between w-[95%] my-[36px] '>
					<h1 className='text-white md:text-xl text-md '>
						Programes live right now
					</h1>
				</div>
				<LiveTvHistoryCoursel />
			</div>
			<div>
				<div className='flex justify-between w-[95%] my-[36px] '>
					<h1 className='text-white md:text-xl text-md '>
						Channels you might like
					</h1>
				</div>
				<LiveTvHistoryChannelList />
			</div>
			<div>
				<div>
					<h1 className='text-white md:text-xl text-md '>
						Upcoming programes you might like
					</h1>
				</div>
				<WatchedPrograms />
			</div>
		</div>
	);
};

export default LiveTvDiscover;
