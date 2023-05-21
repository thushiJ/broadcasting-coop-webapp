import ChannelCoursel from './home/ChannelCoursel';
import HeroSlider from './home/HeroSlider';
import LiveRightNowCoursel from './home/LiveRightNowCoursel';
import TvGuide from './home/TvGuide';

function LiveTvPageHome() {
	return (
		<div className='w-full'>
			<HeroSlider />
			<ChannelCoursel />
			<LiveRightNowCoursel />
			<TvGuide />
			<LiveRightNowCoursel />
		</div>
	);
}

export default LiveTvPageHome;
