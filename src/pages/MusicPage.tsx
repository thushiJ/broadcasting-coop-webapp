import { Routes, Route } from 'react-router-dom';
import { HiOutlineStar } from 'react-icons/hi';
import { RiHomeLine, RiHistoryFill, RiPlayListFill } from 'react-icons/ri';
import { BiCompass } from 'react-icons/bi';
import { RouteName } from '../constant/routeNames';
import FeaturePages from '../layout/FeaturePages';
import MusicPageHome from './musicPage/MusicPageHome';

function MusicPage() {
	const navData = [
		{
			link: '/music',
			title: 'Home',
			icon: RiHomeLine,
		},
		{
			link: RouteName.MusicDiscoverRoute,
			title: 'Discover',
			icon: BiCompass,
		},
		{
			link: RouteName.MusicHistoryRoute,
			title: 'History',
			icon: RiHistoryFill,
		},
		{
			link: RouteName.MusicColletionRoute,
			title: 'Collection',
			icon: RiPlayListFill,
		},
	];
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<FeaturePages
							Content={MusicPageHome}
							navData={navData}
							title={'Music'}
						/>
					}
				/>
				<Route
					path={RouteName.MusicDiscover}
					element={
						<FeaturePages
							Content={MusicPageHome}
							navData={navData}
							title={'Music'}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default MusicPage;
