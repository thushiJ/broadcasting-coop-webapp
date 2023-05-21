import { Routes, Route } from 'react-router-dom';
import { HiOutlineStar } from 'react-icons/hi';
import { RiHomeLine, RiHistoryFill, RiPlayList2Fill } from 'react-icons/ri';
import { BiCompass } from 'react-icons/bi';
import { RouteName } from '../constant/routeNames';
import VideoPageDiscover from './videoPage/VideoPageDiscover';
import VideoPageFavorite from './videoPage/VideoPageFavorite';
import VideoPageHistory from './videoPage/VideoPageHistory';
import VideoPageHome from './videoPage/VideoPageHome';
import VideoPageWatchlist from './videoPage/VideoPageWatchlist';
import FeaturePages from '../layout/FeaturePages';
import VideoPlayerPage from './videoPage/VideoPlayerPage';

function VideoPage() {
	const navData = [
		{
			link: '/video',
			title: 'Home',
			icon: RiHomeLine,
		},
		{
			link: RouteName.VideoDiscoverRoute,
			title: 'Discover',
			icon: BiCompass,
		},
		{
			link: RouteName.VideoHistoryRoute,
			title: 'History',
			icon: RiHistoryFill,
		},
		{
			link: RouteName.VideoWatchlistRoute,
			title: 'Watchlist',
			icon: RiPlayList2Fill,
		},
		{
			link: RouteName.VideoFavouriteRoute,
			title: 'Favorite',
			icon: HiOutlineStar,
		},
	];
	return (
		<>
			<Routes>
				<Route
					path=''
					element={
						<FeaturePages
							Content={VideoPageHome}
							navData={navData}
							title={'Video'}
						/>
					}
				/>
				<Route
					path={RouteName.VideoDiscover}
					element={
						<FeaturePages
							Content={VideoPageDiscover}
							navData={navData}
							title={'Video'}
						/>
					}
				/>
				<Route
					path={RouteName.VideoHistory}
					element={
						<FeaturePages
							Content={VideoPageHistory}
							navData={navData}
							title={'Video'}
						/>
					}
				/>
				<Route
					path={RouteName.VideoWatchlist}
					element={
						<FeaturePages
							Content={VideoPageWatchlist}
							navData={navData}
							title={'Video'}
						/>
					}
				/>
				<Route
					path={RouteName.VideoFavourite}
					element={
						<FeaturePages
							Content={VideoPageFavorite}
							navData={navData}
							title={'Video'}
						/>
					}
				/>
				<Route path={RouteName.VideoPLayerPage} element={<VideoPlayerPage />} />
			</Routes>
		</>
	);
}

export default VideoPage;
