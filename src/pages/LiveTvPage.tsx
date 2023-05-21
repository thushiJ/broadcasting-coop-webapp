import { RiHomeLine, RiHistoryFill } from 'react-icons/ri';
import { BiCompass } from 'react-icons/bi';
import { Routes, Route } from 'react-router-dom';
import LiveTvPageHome from './liveTvPage/LiveTvPageHome';
import LiveTvHistory from './liveTvPage/LiveTvHistory';
import { RouteName } from '../constant/routeNames';
import LiveTvDiscover from './liveTvPage/LiveTvDiscover';
import FeaturePages from '../layout/FeaturePages';

function LiveTvPage() {
	const navData = [
		{
			link: '/livetv',
			title: 'Home',
			icon: RiHomeLine,
		},
		{
			link: RouteName.LiveTVDiscoverRoute,
			title: 'Discover',
			icon: BiCompass,
		},
		{
			link: RouteName.LiveTVHistoryRoute,
			title: 'History',
			icon: RiHistoryFill,
		},
		{
			link: RouteName.LiveTVChannelRoute,
			title: 'Channels',
			icon: RiHistoryFill,
		},
	];

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<FeaturePages
							Content={LiveTvPageHome}
							navData={navData}
							title={'LiveTV'}
						/>
					}
				/>
				<Route
					path={RouteName.LiveTVHistory}
					element={
						<FeaturePages
							Content={LiveTvHistory}
							navData={navData}
							title={'LiveTV'}
						/>
					}
				/>
				<Route
					path={RouteName.LiveTVDiscover}
					element={
						<FeaturePages
							Content={LiveTvDiscover}
							navData={navData}
							title={'LiveTV'}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default LiveTvPage;
