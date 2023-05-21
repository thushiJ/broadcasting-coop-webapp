import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouteName } from '../constant/routeNames';
import Home from '../pages/Home';
import LiveTvPage from '../pages/LiveTvPage';
import Login from '../pages/Login';
import VideoPage from '../pages/VideoPage';
import Welcome from '../pages/Welcome';
import LiveTvLandingPage from '../pages/LiveTvLandingPage';
import LandingPages from '../layout/LandingPages';
import MusicPage from '../pages/MusicPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={RouteName.Home}
					element={
						<>
							<Home />
						</>
					}
				/>
				<Route path={RouteName.Welcome} element={<Welcome />} />
				<Route path={RouteName.Video} element={<VideoPage />} />
				<Route path={RouteName.Music} element={<MusicPage />} />
				<Route path={RouteName.LiveTV} element={<LiveTvPage />} />
				<Route
					path={RouteName.LiveTVLandingPage}
					element={
						<>
							<LandingPages Content={LiveTvLandingPage} />
						</>
					}
				/>

				<Route path={RouteName.Login} element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
