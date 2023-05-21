export enum RouteName {
	//basic routes
	Home = '/',
	Welcome = '/welcome',
	Login = '/login',
	Video = '/video/*',
	LiveTV = '/livetv/*',
	Music = '/music/*',

	//video page routes//=========================================
	VideoDiscover = 'discover/:id',
	VideoHistory = 'history',
	VideoWatchlist = 'watchlist',
	VideoFavourite = 'favourite',
	VideoPLayerPage = 'video-player/:name',

	//video page routes from origin
	VideoDiscoverRoute = '/video/discover',
	VideoHistoryRoute = '/video/history',
	VideoWatchlistRoute = '/video/watchlist',
	VideoFavouriteRoute = '/video/favourite',
	//=========================================

	//livetv page routes//=========================================
	LiveTVDiscover = 'discover',
	LiveTVHistory = 'history',
	LiveTVChannel = 'channel',
	LiveTVWatchlist = 'watchlist',
	LiveTVFavourite = 'favourite',
	LiveTVPlayer = 'player',
	LiveTVLandingPage = 'livetv-landing',

	//livetv page from origin
	LiveTVDiscoverRoute = '/livetv/discover',
	LiveTVHistoryRoute = '/livetv/history',
	LiveTVWatchlistRoute = '/livetv/watchlist',
	LiveTVChannelRoute = '/livetv/channels',
	LiveTVPlayerRoute = '/livetv/player',
	//=========================================

	//livetv page routes//=========================================
	MusicDiscover = 'discover',
	MusicHistory = 'history',
	MusicWatchlist = 'watchlist',
	MusicFavourite = 'favourite',
	MusicLandingPage = 'livetv-landing',

	//music page from origin
	MusicPlaylist = '/music/playlist',
	MusicArtistPage = '/music/artist/:id',
	MusicAlbumPage = '/music/album/:id',
	MusicCategoryPage = '/music/category/:id',
	MusicDiscoverRoute = '/music/discover',
	MusicHistoryRoute = '/music/history',
	MusicWatchlistRoute = '/music/watchlist',
	MusicChannelRoute = '/music/channels',
	MusicColletionRoute = '/music/collection',
	//=========================================
}
